import React, { Component, useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import data from "./data/login.json";
import Demo from "./Demo";
import { render } from "react-dom";
// const email="";
// const password="";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //console.log(email)
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit() {
    //console.log('Your input value is: ' + this.state.email)
    //console.log('Your input value is: ' + this.state.password)
    const newdata = data.map((data) => {
      return (
        //console.log(data.username)
        <Demo />
      );
      //   else
      //   {
      //     console.log("login failed");
      //   }
    });
    //event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form>
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
              onChange={this.setEmail}
              className="Emailtextbox"
              placeholder="Enter Email"
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.setPassword}
              type="password"
              placeholder="Enter Password"
              className="Passwordtextbox"
            />
          </div>
          <br />
          {/* <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
          className="LoginBtn"
        > */}
          <button
            className="LoginBtn"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
