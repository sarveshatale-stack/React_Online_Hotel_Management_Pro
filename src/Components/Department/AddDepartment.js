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
      DepName: "",
      DepHead: "",
      DepPhone: "",
      DepEmail: ""
    };
  }
  Addstudent = () => {
    axios
      .post("", {
        DepName: this.state.DepName,
        DepHead: this.state.DepHead,
        DepPhone: this.state.DepPhone,
        DepEmail: this.state.DepEmail
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
                  name="DepName"
                  onChange={this.handleChange}
                  value={this.state.DepName}
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
                  name="DepHead"
                  onChange={this.handleChange}
                  value={this.state.DepHead}
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
                  name="DepPhone"
                  onChange={this.handleChange}
                  value={this.state.DepPhone}
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
                  name="DepEmail"
                  onChange={this.handleChange}
                  value={this.state.DepEmail}
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
