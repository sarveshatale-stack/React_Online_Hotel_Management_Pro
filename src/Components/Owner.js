import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";
import Login from "./Login";
import "./css/Owner.css";
import AddDepartment from "./AddDepartment";
import ViewReport from "./ViewReport";
class Owner extends Component {
  constructor(props) {
    super(props);
    this.loginfunction = this.loginfunction.bind(this);
  }

  loginfunction = () => {
    console.log("role");
    this.renderRedirect();
  };
  renderRedirect = () => {
    console.log("role1");
  };
  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <Router>
          <div>
            <div className="vertical-menu">
              <Link to={"/AddDepartment"} className="nav-link">
                Add Department
              </Link>
              <Link to={"/ViewReport"} className="nav-link">
                View Report
              </Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AddDepartment" component={AddDepartment} />
              <Route path="/ViewReport" component={ViewReport} />
              <Route path="/Login" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Owner;
