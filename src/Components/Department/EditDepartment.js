import React from "react";
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
import axios from "axios";
import "./css/AddDepartment.css";
import { Link } from "react-router-dom";
const Save_Department_From = "REACT.AddDepartment";
class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      DepName: "",
      DepHead: "",
      DepPhone: "",
      DepEmail: ""
    };
  }

  componentDidMount() {
    const saveDep = JSON.parse(localStorage.getItem(Save_Department_From));
    if (saveDep.length >= 1) {
      var newDepartmentList = saveDep.filter(
        (Dept) => Dept.id === this.props.match.params.id
      );
      this.setState({
        DepName: newDepartmentList.DepName,
        DepHead: newDepartmentList.DepHead,
        DepPhone: newDepartmentList.DepPhone,
        DepEmail: newDepartmentList.DepEmail
      });
    }
  }

  onChangeName(e) {
    this.setState({
      DepName: e.target.value
    });
  }
  onChangeRollNo(e) {
    this.setState({
      DepHead: e.target.value
    });
  }
  onChangeClass(e) {
    this.setState({
      DepPhone: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      DepEmail: e.target.value
    });
  }

  onSubmit(e) {
    debugger;
    e.preventDefault();
    const obj = {
      Id: this.props.match.params.id,
      DepName: this.state.DepName,
      DepHead: this.state.DepHead,
      DepPhone: this.state.DepPhone,
      DepEmail: this.state.DepEmail
    };
    axios.post("", obj).then((res) => console.log(res.data));
    debugger;
    this.props.history.push("/Departmentlist");
  }
  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Update Student Informations</h4>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Department Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepName"
                  id="DepName"
                  value={this.state.DepName}
                  onChange={this.onChangeName}
                  placeholder="Enter Dept Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="head" sm={2}>
                Department Head
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepHead"
                  id="DepHead"
                  value={this.state.DepHead}
                  onChange={this.onChangeRollNo}
                  placeholder="Enter Dept Head"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phone" sm={2}>
                Department Phone
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepPhone"
                  id="DepPhone"
                  value={this.state.DepPhone}
                  onChange={this.onChangeClass}
                  placeholder="Enter Dept Phone"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="EmailId" sm={2}>
                Department EmailId
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepEmail"
                  id="DepEmail"
                  value={this.state.DepEmail}
                  onChange={this.onChangeAddress}
                  placeholder="Enter Email Id"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button type="submit" color="success">
                  Submit
                </Button>{" "}
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

export default Edit;
