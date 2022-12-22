import React from "react";
import styles from "../styles/Textinput.module.css";

const Textinput = ({ icon, ...rest }) => {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default Textinput;
