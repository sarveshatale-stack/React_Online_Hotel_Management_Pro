import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Owner.css";
import DepartmentList from "./Department/DepartmentList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDepartment from "./Department/AddDepartment";
import ViewReport from "./ViewReport";
import "./css/AddDepartment.css";
class Owner extends Component {
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
                View Report
              </Link>
              <Link to={"/ViewReport"} className="nav-link">
                View Report
              </Link>
            </div>
            <Switch>
              <Route path="/AddDepartment" component={AddDepartment} />
              <Route path="/DepartmentList" component={DepartmentList} />
              <Route path="/ViewReport" component={ViewReport} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Owner;
