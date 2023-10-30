"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const Navbar_1 = __importDefault(require("../../component/Navbar"));
const react_alert_1 = require("react-alert");
const Footer_1 = __importDefault(require("../../component/Footer"));
const axios_1 = __importDefault(require("axios"));
function Register() {
    const [fName, setFName] = (0, react_1.useState)("");
    const [lName, setLName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const alert = (0, react_alert_1.useAlert)();
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (fName === "" || lName === "" || email === "" || password === "") {
            console.log("dsd");
            alert.show("saasd son");
        }
        else {
            console.log(fName, lName, email, password);
            try {
                const response = yield axios_1.default.post("http://localhost:8000/api/v1/user/register", {
                    name: `${fName}" "${lName}`,
                    email,
                    password,
                });
                console.log(response.data);
                if (response.data) {
                    alert.show("daamn son");
                    setLName("");
                    setFName("");
                    setEmail("");
                    setPassword("");
                }
            }
            catch (error) {
                console.error(error);
                console.log(error);
            }
        }
    });
    return (<div>
      <Navbar_1.default />
      <section className="register-section">
        <h2>Create Account</h2>
        <form>
          <div className="register-form-item">
            <label>First Name</label>
            <input value={fName} onChange={(e) => {
            setFName(e.target.value);
        }}/>
          </div>
          <div className="register-form-item">
            <label>Last Name</label>
            <input value={lName} onChange={(e) => {
            setLName(e.target.value);
        }}/>{" "}
          </div>
          <div className="register-form-item">
            <label>Email</label>
            <input value={email} onChange={(e) => {
            setEmail(e.target.value);
        }}/>{" "}
          </div>
          <div className="register-form-item">
            <label>Password</label>

            <input value={password} onChange={(e) => {
            setPassword(e.target.value);
        }} type="password"/>
          </div>
          <div className="button-wrapper">
            <button onClick={handleSubmit}>Create</button>
          </div>
        </form>
      </section>
      {/* <Subscribe /> */}
      <Footer_1.default />
    </div>);
}
exports.default = Register;
//# sourceMappingURL=Index.js.map