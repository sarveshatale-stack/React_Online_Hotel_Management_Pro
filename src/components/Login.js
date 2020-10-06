import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import * as loginData from "./login.json";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState(loginData.username);
  // const [password, setPassword] = useState(loginData.password);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="Login" className="LoginHeader">
          Login
        </label>
        <br />
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Emailtextbox"
            placeholder="Enter Email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="Passwordtextbox"
          />
        </div>
        <br />
        <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
          className="LoginBtn"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
export default Login;
