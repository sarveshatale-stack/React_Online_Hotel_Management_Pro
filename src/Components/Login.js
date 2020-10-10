import React, { Component } from "react";
import "./Login.css";
import data from "./data/login.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Save_User_Sign_From = "REACT.UserSignUp";
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
    //SignUp Login
    // const usersign = JSON.parse(localStorage.getItem(Save_User_Sign_From));
    // for (var i = 0; i < usersign.length; i++) {
    //   console.log(usersign);
    //   if (
    //     this.state.email === usersign[i].UserEmailId &&
    //     this.state.password === usersign[i].Password
    //   ) {
    //     if (usersign[i].UserRole === "Owner") {
    //       this.props.history.push("/Owner");
    //     } else if (usersign[i].UserRole === "Manager") {
    //       this.props.history.push("/RoomManagement");
    //     } else {
    //       this.props.history.push("/Owner");
    //     }
    //   }
    // }
    const newdata = data.map((data) => {
      if (
        this.state.email === data.email &&
        this.state.password === data.password
      ) {
        if (data.Role === "Owner") {
          this.props.history.push("/Owner");
        } else if (data.Role === "Manager") {
          this.props.history.push("/RoomManagement");
        } else {
          this.props.history.push("/Owner");
        }
      }
    });
    event.preventDefault();
  }
  renderRedirect = () => {
    console.log("Demo page");
    //this.props.history.push('/posts/');
    this.props.history.push("/Owner");
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
          <div>
            <Link to={"/UserSignUp"} className="nav-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
