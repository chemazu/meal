import express from "express";
import cors from "cors";
import mealItemRoute from "./routes/mealitem";
import errorMiddleware from "./middleware/error";
import { config } from "dotenv";

import userRoute from "./routes/auth";
import mongoose from "mongoose";
const app = express();
const port = 8000;
config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/user", userRoute);

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://chemazu:Ratface_3@chemazu.juxhwwr.mongodb.net/meal"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
