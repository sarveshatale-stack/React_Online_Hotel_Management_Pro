import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Save_Room_From = "REACT.AddRoom";
function RoomList(props) {
  const [Room, getRoom] = useState([]);

  useEffect(() => {
    PopulateRoom();
  }, [props.value]);

  const PopulateRoom = () => {
    const saveRoom = JSON.parse(localStorage.getItem(Save_Room_From));
    if (saveRoom) {
      getRoom(saveRoom);
    }
  };

  const handledeleteEmployee = (id) => {
    if (window.confirm("Are you sure? Click OK to delete this record.")) {
      var newRoomList = Room.filter((emp) => emp.id != id);
      getRoom(newRoomList);
      localStorage.setItem(Save_Room_From, JSON.stringify(newRoomList));
    }
  };

  return (
    <div className="AppContainer">
      <h4 className="PageHeading" align="center">
        Room List
      </h4>
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
        <tbody>
          {Room.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.RoomNumber}</td>
                <td>{item.RoomType}</td>
                <td>{item.RoomPhone}</td>
                <td>{item.RoomLocation}</td>
                <td>{item.RoomStatus}</td>
                <td>
                  <Link
                    to={"/EditRoom?Roomid=" + item.id}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <input
                    className="btn btn-danger"
                    type="button"
                    value="x"
                    onClick={() => handledeleteEmployee(item.id)}
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default RoomList;
