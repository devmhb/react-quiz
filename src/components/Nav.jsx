import React from "react";
import styles from "../styles/Nav.module.css";
import Accounts from "./Accounts";
import logo from "../assist/icons8-old-vmware-logo-50.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Accounts />
    </nav>
  );
};

export default Nav;
