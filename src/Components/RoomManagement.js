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
class RoomManagement extends Component {
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
            </div>
            <Switch>
              <Route path="/AddRoom" component={AddRoom} />
              <Route path="/EditRoom" component={EditRoom} />
              <Route path="/RoomList" component={RoomList} />
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

export default RoomManagement;
