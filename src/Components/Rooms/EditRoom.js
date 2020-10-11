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
const Save_Room_From = "REACT.AddRoom";
class EditRoom extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onUpdate = this.onUpdate.bind(this);

    this.state = {
      RoomNumber: "",
      RoomType: "",
      RoomPhone: "",
      RoomLocation: "",
      RoomStatus: ""
    };
  }

  componentDidMount() {
    const saveDep = JSON.parse(localStorage.getItem(Save_Room_From));
    if (saveDep) {
      const query = new URLSearchParams(this.props.location.search);
      const id = query.get("Roomid");
      const newdata = saveDep.map((data) => {
        let Compareid = data.id.toString();
        if (id === Compareid) {
          this.setState({
            RoomNumber: data.RoomNumber,
            RoomType: data.RoomType,
            RoomPhone: data.RoomPhone,
            RoomLocation: data.RoomLocation,
            RoomStatus: data.RoomStatus
          });
        }
      });
    }
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

  onUpdate(e) {
    e.preventDefault();
    const saveRoom = JSON.parse(localStorage.getItem(Save_Room_From));
    if (saveRoom) {
      const query = new URLSearchParams(this.props.location.search);
      const id = query.get("Roomid");
      const newdata = saveRoom.map((data) => {
        let Compareid = data.id.toString();
        if (id === Compareid) {
          (data.RoomNumber = this.state.RoomNumber),
            (data.RoomType = this.state.RoomType),
            (data.RoomPhone = this.state.RoomPhone),
            (data.RoomLocation = this.state.RoomLocation);
          data.RoomStatus = this.state.RoomStatus;
        }
      });
      var newDepartmentList = saveRoom.filter((emp) => emp.id !== id);
      localStorage.setItem(Save_Room_From, JSON.stringify(newDepartmentList));
    }

    //localStorage.setItem(Save_Department_From, JSON.stringify(saveDep));
    this.props.history.push("/RoomList");
  }

  render() {
    return (
      <Container className="AppContainer">
        <h4 className="PageHeading">Update Room Informations</h4>
        <Form className="form" onSubmit={this.onUpdate}>
          <Col>
            <FormGroup row>
              <Label for="number" sm={2}>
                Room Number
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="RoomNumber"
                  id="RoomNumber"
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
                  id="RoomType"
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
                  id="RoomPhone"
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
                  id="Roomlocation"
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
                  id="RoomStatus"
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

export default EditRoom;
