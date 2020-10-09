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
      RoomNumber: "",
      RoomType: "",
      RoomPhone: "",
      RoomLocation: "",
      RoomStatus: ""
    };
  }

  componentDidMount() {
    axios
      .get("?id=" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          RoomNumber: response.data.RoomNumber,
          RoomType: response.data.RoomType,
          RoomPhone: response.data.RoomPhone,
          RoomLocation: response.data.RoomLocation,
          RoomStatus: response.data.RoomStatus
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      RoomNumber: e.target.value
    });
  }
  onChangeRollNo(e) {
    this.setState({
      RoomType: e.target.value
    });
  }
  onChangeClass(e) {
    this.setState({
      RoomPhone: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      RoomLocation: e.target.value
    });
  }
  onChangeStatus(e) {
    this.setState({
      RoomStatus: e.target.value
    });
  }
  onSubmit(e) {
    debugger;
    e.preventDefault();
    const obj = {
      Id: this.props.match.params.id,
      RoomNumber: this.state.RoomNumber,
      RoomType: this.state.RoomType,
      RoomPhone: this.state.RoomPhone,
      RoomLocation: this.state.RoomLocation,
      RoomStatus: this.state.RoomStatus
    };
    axios.post("", obj).then((res) => console.log(res.data));
    debugger;
    this.props.history.push("/RoomList");
  }
  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Update Room Informations</h4>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup row>
              <Label for="number" sm={2}>
                Room Number
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="DepName"
                  value={this.state.RoomNumber}
                  onChange={this.onChangeName}
                  placeholder="Enter Room Number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="type" sm={2}>
                Room Type
              </Label>
              <Col sm={10}>
                <select
                  name="RoomType"
                  value={this.state.RoomType}
                  onChange={this.onChangeRollNo}
                >
                  <option>Normal</option>
                  <option>Ac</option>
                  <option>Delux</option>
                  <option>Super Delux</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phone" sm={2}>
                Room Phone
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="RoomPhone"
                  value={this.state.RoomPhone}
                  onChange={this.onChangeClass}
                  placeholder="Enter Phone"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="location" sm={2}>
                Room Location
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Roomlocation"
                  value={this.state.RoomLocation}
                  onChange={this.onChangeAddress}
                  placeholder="Enter Location"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="location" sm={2}>
                Room Status
              </Label>
              <Col sm={10}>
                <select
                  name="RoomStatus"
                  onChange={this.onChangeStatus}
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
