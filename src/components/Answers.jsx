import React from "react";
import Checkbox from "./Checkbox";
import styles from "../styles/Answers.module.css";

const Answers = () => {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="this is test" />
    </div>
  );
};

export default Answers;
