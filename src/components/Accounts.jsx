import React from "react";
import styles from "../styles/Accounts.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={styles.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
