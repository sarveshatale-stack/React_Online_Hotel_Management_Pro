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
class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RoomNumber: "",
      RoomType: "",
      RoomPhone: "",
      RoomLocation: "",
      RoomStatus: ""
    };
  }
  AddRoom = () => {
    axios
      .post("", {
        RoomNumber: this.state.RoomNumber,
        RoomType: this.state.RoomType,
        RoomPhone: this.state.RoomPhone,
        RoomLocation: this.state.RoomLocation,
        RoomStatus: this.state.RoomStatus
      })
      .then((json) => {
        if (json.data.Status === "Success") {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          this.props.history.push("/Studentlist");
        } else {
          alert("Data not Saved");
          debugger;
          this.props.history.push("/RoomList");
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="AppContainer">
        <h4 className="PageHeading">Enter Department Informations</h4>
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="Number" sm={2}>
                Room Number
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="RoomNumber"
                  onChange={this.handleChange}
                  value={this.state.RoomNumber}
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
                  onChange={this.handleChange}
                  value={this.state.RoomType}
                >
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
                  onChange={this.handleChange}
                  value={this.state.RoomPhone}
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
                  onChange={this.handleChange}
                  value={this.state.RoomLocation}
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
                  onChange={this.handleChange}
                  value={this.state.RoomStatus}
                >
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
                  onClick={this.AddRoom}
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
}

export default AddRoom;
