import React from "react";
import styles from "../styles/Accounts.module.css";
import { Link } from "react-router-dom";
const Accounts = () => {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
};

export default Accounts;
