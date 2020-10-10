import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Owner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRoom from "./Rooms/AddRoom";
import RoomList from "./Rooms/RoomList";
import "./css/AddDepartment.css";
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
            </div>
            <Switch>
              <Route path="/AddRoom" component={AddRoom} />
              <Route path="/RoomList" component={RoomList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default RoomManagement;
