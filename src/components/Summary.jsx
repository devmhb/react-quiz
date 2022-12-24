import React from "react";
import styles from "../styles/Summary.module.css";
import img from "../assist/success.png";
const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={styles.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
