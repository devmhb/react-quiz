import React from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <form className={`${styles.signup} form`} action="#">
      <div className={styles.textInput}>
        <input type="text" placeholder="Enter name" />
        <span className={styles.material - icons - outlined}> person </span>
      </div>

      <div className={styles.textInput}>
        <input type="text" placeholder="Enter email" />
        <span className={styles.material - icons - outlined}>
          alternate_email
        </span>
      </div>

      <div className={styles.textInput}>
        <input type="password" placeholder="Enter password" />
        <span className={styles.material - icons - outlined}> lock </span>
      </div>

      <div className={styles.textInput}>
        <input type="password" placeholder="Confirm password" />
        <span className={styles.material - icons - outlined}> lock_clock </span>
      </div>

      <label>
        <input type="checkbox" />
        <span>I agree to the Terms & Conditions</span>
      </label>

      <div className={styles.button}>
        <span>Submit now</span>
      </div>

      <div className={styles.info}>
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </form>
  );
};

export default Form;
