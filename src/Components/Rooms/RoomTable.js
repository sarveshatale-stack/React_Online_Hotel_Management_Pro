import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Table extends Component {
  constructor(props) {
    super(props);
  }

  DeleteRoom = () => {
    axios.delete("?id=" + this.props.obj.Id).then((json) => {
      if (json.data.Status === "Delete") {
        alert("Record deleted successfully!!");
      }
    });
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.RoomNumber}</td>
        <td>{this.props.obj.RoomType}</td>
        <td>{this.props.obj.RoomPhone}</td>
        <td>{this.props.obj.RoomLocation}</td>
        <td>{this.props.obj.RoomStatus}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.Id} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            onClick={this.DeleteRoom}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
