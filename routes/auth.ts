import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.model";

const router = express.Router();

// POST route to register

router.post("/register", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user already exists in the database
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = new User({
      //   username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      email: req.body.email,
      //   avatar: req.body.avatar,
    });
    await user.save();

    res.send({ name: user.name, email: user.email });
  } catch (error) {
    return res.status(400).send(error);
  }
});

function validateUser(user: any) {
  const schema = Joi.object({
    // username: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    // avatar: Joi.string(),
  });

  return schema.validate(user);
}
// POST route to login

router.post("/login", async (req, res) => {
  // Validate the request body using Joi
  console.log("first", req.body);
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the user exists in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");

  // Compare the plain text password with the hashed password stored in the database
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  // Create a JWT and send it as the response
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

function validateLogin(login) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(login);
}

// GET route to retrieve a user by ID
router.get("/:id", async (req, res) => {
  try {
    // Validate the request parameters
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Find the user in the database
    const user = await User.findById(value.id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE route to delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    // Validate the request parameters
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Find the user in the database and delete it
    const user = await User.findByIdAndDelete(value.id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST route to update a user
router.post("/:id", async (req, res) => {
  try {
    // Validate the request body
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      avatar: Joi.string().optional(),
      createdAt: Joi.date().optional(),
      updatedAt: Joi.date().optional(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(value.password, salt);

    // Update the user in the database
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: value.username,
        password: hashedPassword,
        name: value.name,
        email: value.email,
        avatar: value.avatar,
        createdAt: value.createdAt,
        updatedAt: new Date(),
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// POST route for forot password
router.post("/forgot-password", async (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate(req.body);

  if (error && error.details) {
    return res.status(400).json({ msg: error.details });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ msg: "This email is not registered." });
  }

  // Generate and send a reset password token to the user's email address
  const resetPasswordToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
});

// post route to get users by username

// router.post("/find-by-username", async (req, res) => {
//   console.log("first")
//   try {
//     console.log(req.body);
//     const { searchQuery } = req.body;
//     let users = await User.find({ username: searchQuery });
//     if (!users) {
//       return res.status(400).send("no user found");
//     }
//     res.send(users);
//   } catch (error) {
//     console.error(error, "cant find user by username");
//   }
// });

router.post("/find-by-username", async (req, res) => {
  console.log("first");
});

export default router;
