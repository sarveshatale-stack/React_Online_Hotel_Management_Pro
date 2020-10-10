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
    axios
      .get("?id=" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          DepName: response.data.DepName,
          DepHead: response.data.DepHead,
          DepPhone: response.data.DepPhone,
          DepEmail: response.data.DepEmail
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
                  value={this.state.DepName}
                  onChange={this.onChangeName}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Department Head
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepHead"
                  value={this.state.DepHead}
                  onChange={this.onChangeRollNo}
                  placeholder="Enter RollNo"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Department Phone
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepPhone"
                  value={this.state.DepPhone}
                  onChange={this.onChangeClass}
                  placeholder="Enter Class"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Department EmailId
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepEmail"
                  value={this.state.DepEmail}
                  onChange={this.onChangeAddress}
                  placeholder="Enter Address"
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