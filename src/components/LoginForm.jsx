import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Textinput from "./Textinput";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { currentUser } = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();

  async function handleLogin(e) {
    try {
      e.preventDefault();
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError("Login failed");
      console.log(err);
    }
  }

  return (
    <Form style={{ height: "350px" }} onSubmit={handleLogin}>
      <Textinput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Textinput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p>{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
