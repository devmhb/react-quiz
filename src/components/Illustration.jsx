import React from "react";
import styles from "../styles/Illustration.module.css";
import signupImage from "../assist/signup.svg";
const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
