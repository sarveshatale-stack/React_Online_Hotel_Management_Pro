import React, { Component, useState, useHistory } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import data from "./data/login.json";
import Demo from "./Demo";
import Owner from "./Owner";
import { render } from "react-dom";
import { Redirect } from "react-router";
// const email="";
// const password="";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginvalidate: false
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
  handleSubmit(event) {
    //console.log('Your input value is: ' + this.state.email)
    //console.log('Your input value is: ' + this.state.password)
    const newdata = data.map((data) => {
      if (
        this.state.email === data.email &&
        this.state.password === data.password
      ) {
        //this.setState({ loginvalidate: true });
        //console.log(this.state.loginvalidate);
        this.renderRedirect();
        // const history = useHistory();
        // const navigateTo = () => history.push('/Demo');
        console.log("Login sucess");
      }

      // console.log(data.email)
      // return (

      //   <Demo />
      // );
      //   else
      //   {
      //     console.log("login failed");
      //   }
    });
    //event.preventDefault();
  }
  renderRedirect = () => {
    // console.log(this.state.loginvalidate);
    // if (this.state.loginvalidate) {
    console.log("Demo page");
    //this.props.history.push('/posts/');
    this.props.history.push("/Owner/");
    // this.props.history.push("/");
    //return <Redirect to="/Demo" />;
    // }
  };

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
