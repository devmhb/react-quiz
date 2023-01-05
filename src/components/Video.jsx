import React from "react";
import image from "../assist/3.jpg";
import styles from "../styles/Video.module.css";
import { Link } from "react-router-dom";
const Video = () => {
  return (
    <div className={styles.video}>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={styles.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
