import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Owner.css";
import DepartmentList from "./Department/DepartmentList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDepartment from "./Department/AddDepartment";
import ViewReport from "./ViewReport";
import Edit from "./Department/EditDepartment";
import "./css/AddDepartment.css";
import Login from "./Login";
class Owner extends Component {
  onLogOut(e) {
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="vertical-menu">
              <Link to={"/AddDepartment"} className="nav-link">
                Add Department
              </Link>
              <Link to={"/DepartmentList"} className="nav-link">
                Department List
              </Link>
              <Link to={"/ViewReport"} className="nav-link">
                View Report
              </Link>
              <Link to={"/Login"} className="nav-link" onClick={this.onLogOut}>
                Log Out
              </Link>
            </div>
            <Switch>
              <Route path="/AddDepartment" component={AddDepartment} />
              <Route path="/DepartmentList" component={DepartmentList} />
              <Route path="/Edit" component={Edit} />
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
