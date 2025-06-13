import { Navigate } from "react-router-dom";

// to prevent unauthenticated users from accessing pages that should only be available after login, like adding products.
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

