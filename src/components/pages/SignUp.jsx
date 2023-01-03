import React from "react";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

const SignUp = () => {
  return (
    <div className="container">
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
