import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children }) => {
  return (
    <div className={styles.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
