"use strict";
// import React from "react";
// import { Route, RouteProps, Navigate } from "react-router-dom";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// type Props = {
//   component: React.ComponentType<any>;
//   isAuthenticated: boolean;
// } & RouteProps;
// export default function ProtectedRoute({
//   component: Component,
//   isAuthenticated,
//   ...rest
// }: Props) {
//   return (
//     <Route
//       {...rest}
//       element={
//         isAuthenticated ? <Component /> : <Navigate to="/login" replace />
//       }
//     />
//   );
// }
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function ProtectedRoute(_a) {
    var { component: Component, isAuthenticated } = _a, rest = __rest(_a, ["component", "isAuthenticated"]);
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route {...rest} element={isAuthenticated ? (<Component />) : (<react_router_dom_1.Navigate to="/login" replace/>)}/>
    </react_router_dom_1.Routes>);
}
exports.default = ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map