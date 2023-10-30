"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_1 = __importDefault(require("./middleware/error"));
const dotenv_1 = require("dotenv");
const auth_1 = __importDefault(require("./routes/auth"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 8000;
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(error_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/v1/user", auth_1.default);
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect("mongodb+srv://chemazu:Ratface_3@chemazu.juxhwwr.mongodb.net/meal");
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database connected successfully");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map