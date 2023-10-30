"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_model_1 = __importDefault(require("../models/User.model"));
const router = express_1.default.Router();
// POST route to register
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = validateUser(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);
        // Check if the user already exists in the database
        let user = yield User_model_1.default.findOne({ email: req.body.email });
        if (user)
            return res.status(400).send("User already registered.");
        // Hash the password using bcrypt
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, salt);
        // Create a new user
        user = new User_model_1.default({
            //   username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            email: req.body.email,
            //   avatar: req.body.avatar,
        });
        yield user.save();
        res.send({ name: user.name, email: user.email });
    }
    catch (error) {
        return res.status(400).send(error);
    }
}));
function validateUser(user) {
    const schema = joi_1.default.object({
        // username: Joi.string().min(5).max(50).required(),
        password: joi_1.default.string().min(5).max(255).required(),
        name: joi_1.default.string().min(5).max(50).required(),
        email: joi_1.default.string().min(5).max(255).required().email(),
        // avatar: Joi.string(),
    });
    return schema.validate(user);
}
// POST route to login
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate the request body using Joi
    console.log("first", req.body);
    const { error } = validateLogin(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    // Check if the user exists in the database
    const user = yield User_model_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).send("Invalid email or password.");
    // Compare the plain text password with the hashed password stored in the database
    const validPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send("Invalid email or password.");
    // Create a JWT and send it as the response
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
}));
function validateLogin(login) {
    const schema = joi_1.default.object({
        email: joi_1.default.string().min(5).max(255).required().email(),
        password: joi_1.default.string().min(5).max(255).required(),
    });
    return schema.validate(login);
}
// GET route to retrieve a user by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request parameters
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        const { value, error } = schema.validate(req.params);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        // Find the user in the database
        const user = yield User_model_1.default.findById(value.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
// DELETE route to delete a user by ID
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request parameters
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        const { value, error } = schema.validate(req.params);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        // Find the user in the database and delete it
        const user = yield User_model_1.default.findByIdAndDelete(value.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
// POST route to update a user
router.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request body
        const schema = joi_1.default.object({
            username: joi_1.default.string().required(),
            password: joi_1.default.string().required(),
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            avatar: joi_1.default.string().optional(),
            createdAt: joi_1.default.date().optional(),
            updatedAt: joi_1.default.date().optional(),
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        // Hash the password
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(value.password, salt);
        // Update the user in the database
        const user = yield User_model_1.default.findByIdAndUpdate(req.params.id, {
            username: value.username,
            password: hashedPassword,
            name: value.name,
            email: value.email,
            avatar: value.avatar,
            createdAt: value.createdAt,
            updatedAt: new Date(),
        }, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
// POST route for forot password
router.post("/forgot-password", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
    });
    const { error } = schema.validate(req.body);
    if (error && error.details) {
        return res.status(400).json({ msg: error.details });
    }
    const user = yield User_model_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: "This email is not registered." });
    }
    // Generate and send a reset password token to the user's email address
    const resetPasswordToken = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}));
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
router.post("/find-by-username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("first");
}));
exports.default = router;
//# sourceMappingURL=auth.js.map