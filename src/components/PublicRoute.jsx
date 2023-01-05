import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { currentUser } = useAuth();
  return !currentUser ? children : <Navigate to="/" />;
}
