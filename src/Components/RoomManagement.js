import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Owner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRoom from "./Rooms/AddRoom";
import RoomList from "./Rooms/RoomList";
import EditRoom from "./Rooms/EditRoom";
import AddStaffDetails from "./Staff/AddStaffDetails.";
import StaffList from "./Staff/StaffList";
import EditStaff from "./Staff/EditStaff";
import Login from "./Login";
class RoomManagement extends Component {
  onLogOut(e) {
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="vertical-menu">
              <Link to={"/AddRoom"} className="nav-link">
                Add Room
              </Link>
              <Link to={"/RoomList"} className="nav-link">
                View Room
              </Link>
              <Link to={"/AddStaffDetails"} className="nav-link">
                Add Employee
              </Link>
              <Link to={"/StaffList"} className="nav-link">
                View Employee
              </Link>
              <Link to={"/Login"} className="nav-link" onClick={this.onLogOut}>
                Log Out
              </Link>
            </div>
            <Switch>
              <Route path="/AddRoom" component={AddRoom} />
              <Route path="/EditRoom" component={EditRoom} />
              <Route path="/RoomList" component={RoomList} />
              <Route path="/AddStaffDetails" component={AddStaffDetails} />
              <Route path="/EditStaff" component={EditStaff} />
              <Route path="/StaffList" component={StaffList} />
              <Route path="/Login" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default RoomManagement;
