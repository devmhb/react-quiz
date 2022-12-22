import React from "react";
import Illustration from "../Illustration";
import Form from "../Form";
import styles from "../../styles/Signup.module.css";
import Textinput from "../Textinput";
import Checkbox from "../Checkbox";
import Button from "../Button";
const SignUp = () => {
  return (
    <div className="container">
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${styles.signup}`}>
          <Textinput type="text" placeholder="Enter name" icon="person" />
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter password" icon="lock" />
          <Textinput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
