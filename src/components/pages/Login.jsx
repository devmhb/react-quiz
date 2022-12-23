import React from "react";
import Form from "../Form";
import Textinput from "../Textinput";
import Illustration from "../Illustration";
import Button from "../Button";
import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${styles.login}`}>
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
