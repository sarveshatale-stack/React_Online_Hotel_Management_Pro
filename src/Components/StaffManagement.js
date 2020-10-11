import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Owner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStaffDetails from "./Staff/AddStaffDetails.";
import StaffList from "./Staff/StaffList";
import EditStaff from "./Staff/EditStaff";
class StaffManagement extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="vertical-menu">
              <Link to={"/AddStaffDetails"} className="nav-link">
                Add Employee
              </Link>
              <Link to={"/StaffList"} className="nav-link">
                View Employee
              </Link>
            </div>
            <Switch>
              <Route path="/AddStaffDetails" component={AddStaffDetails} />
              <Route path="/EditStaff" component={EditStaff} />
              <Route path="/StaffList" component={StaffList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default StaffManagement;
