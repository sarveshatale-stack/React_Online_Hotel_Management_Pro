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
class AddDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      RollNo: "",
      Class: "",
      Address: ""
    };
  }
  Addstudent = () => {
    axios
      .post("", {
        Name: this.state.Name,
        RollNo: this.state.RollNo,
        Class: this.state.Class,
        Address: this.state.Address
      })
      .then((json) => {
        if (json.data.Status === "Success") {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          this.props.history.push("/Studentlist");
        } else {
          alert("Data not Saved");
          debugger;
          this.props.history.push("/Studentlist");
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
              <Label for="name" sm={2}>
                Department Name
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.Name}
                  placeholder="Enter Department Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                Department Head
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="RollNo"
                  onChange={this.handleChange}
                  value={this.state.RollNo}
                  placeholder="Department Head"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Department Phone
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Class"
                  onChange={this.handleChange}
                  value={this.state.Class}
                  placeholder="Department Phone"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Department EmailID
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Address"
                  onChange={this.handleChange}
                  value={this.state.Address}
                  placeholder="Department EmailID"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={this.Addstudent}
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

export default AddDepartment;
