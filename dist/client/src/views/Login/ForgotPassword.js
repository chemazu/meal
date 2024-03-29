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
require("../../styles/register.scss");
const Footer_1 = __importDefault(require("../../component/Footer"));
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
function ForgotPassword() {
    const [email, setEmail] = (0, react_1.useState)("");
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        // console.log(fName, lName, email, password);
        try {
            const response = yield axios_1.default.post("http://localhost:8000/api/v1/user/forgot-password", {
                email,
            });
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    });
    return (<div>
      <Navbar_1.default />
      <section className="register-section">
        <h2>Reset your password</h2>
        <p>We will send you an email to reset your password.</p>
        <form>
          <div className="register-form-item">
            <label>Email</label>
            <input value={email} onChange={(e) => {
            setEmail(e.target.value);
        }}/>{" "}
          </div>

          <react_router_dom_1.Link to="/forgot-password">Forgot Password</react_router_dom_1.Link>

          <div className="button-wrapper">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <react_router_dom_1.Link to="/signin">Cancel</react_router_dom_1.Link>
        </form>
      </section>
      {/* <Subscribe /> */}
      <Footer_1.default />
    </div>);
}
exports.default = ForgotPassword;
//# sourceMappingURL=ForgotPassword.js.map