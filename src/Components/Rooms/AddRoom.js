import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
let flag = true;
const Save_Room_From = "REACT.AddRoom";
const initialObj = {
  RoomNumber: "",
  RoomType: "",
  RoomPhone: "",
  RoomLocation: "",
  RoomStatus: "",
  id: 0
};
function AddRoom() {
  const [Room, setRoom] = useState(initialObj);

  useEffect(() => {}, [Room]);
  const AddRoom = (e) => {
    if (!Room.RoomNumber || !Room.RoomPhone || !Room.RoomLocation) {
      alert("Please enter room data");
      return;
    }
    if (Room.id === 0) {
      let room = { ...Room }; // copying the old datas array

      const saveRoom = JSON.parse(localStorage.getItem(Save_Room_From));
      if (saveRoom.length >= 1) {
        let max;
        for (let i = 0; i < saveRoom.length; i++) {
          if (max == null) max = saveRoom.length;
        }
        //let newId = getMax(saveRoom, "id") + 1;
        //let newId = max + 1;
        //let newId = getMax(saveRoom, "id") + 1;
        room.id = max + 1;
        saveRoom.push(room);
        localStorage.setItem(Save_Room_From, JSON.stringify(saveRoom));
      } else {
        room.id = 1;
        localStorage.setItem(Save_Room_From, JSON.stringify([room]));
      }
      setRoom(initialObj);
      flag = !flag;
    }
  };

  //Added function to get max id
  const getMax = (arr, prop) => {
    console.log("button clicked!");
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || arr[i][prop] > max[prop]) max = arr[i];
    }
    return max;
  };
  const handleChange = (e) => {
    e.persist();
    setRoom({ ...Room, [e.target.id]: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
  };

  return (
    <Container className="AppContainer">
      <h4 className="PageHeading">Enter Room Informations</h4>
      <Form className="form" onSubmit={AddRoom}>
        <Col>
          <FormGroup row>
            <Label for="Number" sm={2}>
              Room Number
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="RoomNumber"
                id="RoomNumber"
                onChange={handleChange}
                value={Room.RoomNumber}
                placeholder="Enter Room Number"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Type" sm={2}>
              Room Type
            </Label>
            <Col sm={5}>
              <select
                name="RoomType"
                id="RoomType"
                onChange={handleChange}
                value={Room.RoomType}
              >
                <option>Please Select</option>
                <option>Normal</option>
                <option>Ac</option>
                <option>Delux</option>
                <option>Super Delux</option>
              </select>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Phone" sm={2}>
              Room Phone
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="RoomPhone"
                id="RoomPhone"
                onChange={handleChange}
                value={Room.RoomPhone}
                placeholder="Room Phone"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>
              Room Location
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="DepEmail"
                id="RoomLocation"
                onChange={handleChange}
                value={Room.RoomLocation}
                placeholder="Room Location(Like: Wing/Floor)"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={2}>
              Room Status
            </Label>
            <Col sm={5}>
              <select
                name="RoomStatus"
                id="RoomStatus"
                onChange={handleChange}
                value={Room.RoomStatus}
              >
                <option>Please Select</option>
                <option>Reserved</option>
                <option>UnReserved</option>
              </select>
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup row>
            <Col sm={5}></Col>
            <Col sm={1}>
              <button
                type="button"
                onClick={AddRoom}
                className="btn btn-success"
              >
                Submit
              </button>
            </Col>
            <Col sm={1}>
              <Button color="danger">Cancel</Button>{" "}
            </Col>
            <Col sm={5}></Col>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}

export default AddRoom;
