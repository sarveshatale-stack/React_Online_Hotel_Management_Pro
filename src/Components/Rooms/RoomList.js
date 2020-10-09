import React, { Component } from "react";
import axios from "axios";
import RoomTable from "./RoomTable";

export default class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }
  componentDidMount() {
    debugger;
    axios
      .get("")
      .then((response) => {
        this.setState({ business: response.data });
        debugger;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.business.map(function (object, i) {
      return <RoomTable obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h4 align="center">Room List</h4>
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Room Phone</th>
              <th>Room Location</th>
              <th>Room Status</th>
              <th colSpan="4">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
