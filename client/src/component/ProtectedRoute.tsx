// import React from "react";
// import { Route, RouteProps, Navigate } from "react-router-dom";

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
import React from "react";
import { Route, RouteProps, Routes, Navigate } from "react-router-dom";

type Props = {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
} & RouteProps;

export default function ProtectedRoute({
  component: Component,
  isAuthenticated,
  ...rest
}: Props) {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated ? (
            <Component />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
