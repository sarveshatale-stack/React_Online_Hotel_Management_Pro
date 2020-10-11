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
//import "./css/AddDepartment.css";
import { Link } from "react-router-dom";
const Save_Staff_From = "REACT.AddStaff";
class EditStaff extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeNIC = this.onChangeNIC.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeOccupation = this.onChangeOccupation.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onUpdate = this.onUpdate.bind(this);

    this.state = {
      Code: "",
      Name: "",
      Address: "",
      NIC: "",
      Salary: "",
      Age: "",
      Occupation: "",
      EmailID: ""
    };
  }

  componentDidMount() {
    const saveStaff = JSON.parse(localStorage.getItem(Save_Staff_From));
    if (saveStaff) {
      const query = new URLSearchParams(this.props.location.search);
      const id = query.get("Staffid");
      const newdata = saveStaff.map((data) => {
        let Compareid = data.id.toString();
        if (id === Compareid) {
          this.setState({
            Code: data.Code,
            Name: data.Name,
            Address: data.Address,
            NIC: data.NIC,
            Salary: data.Salary,
            Age: data.Age,
            Occupation: data.Occupation,
            EmailID: data.EmailID
          });
        }
      });
    }
  }

  onChangeCode(e) {
    this.setState({
      Code: e.target.value
    });
  }
  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });
  }
  onChangeNIC(e) {
    this.setState({
      NIC: e.target.value
    });
  }
  onChangeSalary(e) {
    this.setState({
      Salary: e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
      Age: e.target.value
    });
  }
  onChangeOccupation(e) {
    this.setState({
      Occupation: e.target.value
    });
  }
  onChangeEmailId(e) {
    this.setState({
      EmailID: e.target.value
    });
  }
  onUpdate(e) {
    e.preventDefault();
    const savestaff = JSON.parse(localStorage.getItem(Save_Staff_From));
    if (savestaff) {
      const query = new URLSearchParams(this.props.location.search);
      const id = query.get("Staffid");
      const newdata = savestaff.map((data) => {
        let Compareid = data.id.toString();
        if (id === Compareid) {
          (data.Code = this.state.Code),
            (data.Name = this.state.Name),
            (data.Address = this.state.Address),
            (data.NIC = this.state.NIC),
            (data.Salary = this.state.Salary),
            (data.Age = this.state.Age),
            (data.Occupation = this.state.Occupation),
            (data.EmailID = this.state.EmailID);
        }
        //saveDep.push(data);
      });
      var newDepartmentList = savestaff.filter((emp) => emp.id !== id);
      localStorage.setItem(Save_Staff_From, JSON.stringify(newDepartmentList));
    }

    //localStorage.setItem(Save_Department_From, JSON.stringify(saveDep));
    this.props.history.push("/Stafflist");
  }
  render() {
    return (
      <Container className="AppContainer">
        <h4 className="PageHeading">Update Empolyee Informations</h4>
        <Form className="form" onSubmit={this.onUpdate}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Employee Code
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Code"
                  id="Code"
                  value={this.state.Code}
                  onChange={this.onChangeCode}
                  placeholder="Enter Employee Code"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Employee Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Name"
                  id="Name"
                  value={this.state.Name}
                  onChange={this.onChangeName}
                  placeholder="Enter Employee Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Employee Address
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Address"
                  id="Address"
                  value={this.state.Address}
                  onChange={this.onChangeAddress}
                  placeholder="Enter Employee Address"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Empolyee NIC
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="NIC"
                  id="NIC"
                  value={this.state.NIC}
                  onChange={this.onChangeNIC}
                  placeholder="Enter NIC"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Empolyee Salary
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Salary"
                  id="Salary"
                  value={this.state.Salary}
                  onChange={this.onChangeSalary}
                  placeholder="Enter Empolyee Salary"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="head" sm={2}>
                Empolyee Age
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Age"
                  id="Age"
                  value={this.state.Age}
                  onChange={this.onChangeAge}
                  placeholder="Enter Empolyee Age"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phone" sm={2}>
                Empolyee Occupation
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Occupation"
                  id="Occupation"
                  value={this.state.Occupation}
                  onChange={this.onChangeOccupation}
                  placeholder="Enter Empolyee Occupation"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="EmailId" sm={2}>
                Empolyee EmailID
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="EmailID"
                  id="EmailID"
                  value={this.state.EmailID}
                  onChange={this.onChangeEmailId}
                  placeholder="Enter Empolyee EmailID"
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

export default EditStaff;
