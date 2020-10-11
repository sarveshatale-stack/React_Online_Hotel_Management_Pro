import React, { useState, useEffect } from "react";
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
import "./AddStaff.css";
let flag = true;
const Save_Staff_From = "REACT.AddStaff";
const initialObj = {
  Code: "",
  Name: "",
  Address: "",
  NIC: "",
  Salary: "",
  Age: "",
  Occupation: "",
  EmailID: "",
  id: 0
};
function AddStaff(props) {
  const [Staff, setStaff] = useState(initialObj);

  useEffect(() => {}, [Staff]);

  const AddStaff = (e) => {
    if (
      !Staff.Code ||
      !Staff.Name ||
      !Staff.Address ||
      !Staff.NIC ||
      !Staff.Salary ||
      !Staff.Age ||
      !Staff.Occupation ||
      !Staff.EmailID
    ) {
      alert("Please enter Staff data");
      return;
    }
    if (Staff.id === 0) {
      let staff = { ...Staff }; // copying the old datas array

      const saveStaff = JSON.parse(localStorage.getItem(Save_Staff_From));
      if (saveStaff.length >= 1) {
        let max;
        for (let i = 0; i < saveStaff.length; i++) {
          if (max == null) max = saveStaff.length;
        }
        // let newId = getMax(saveDep, "id") + 1;
        let newId = max + 1;
        staff.id = newId;
        saveStaff.push(staff);
        localStorage.setItem(Save_Staff_From, JSON.stringify(saveStaff));
      } else {
        staff.id = 1;
        localStorage.setItem(Save_Staff_From, JSON.stringify([staff]));
      }
      setStaff(initialObj);
      flag = !flag;
    }
  };

  //Added function to get max id
  const getMax = (arr, prop) => {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || arr[i][prop] > max[prop]) max = arr[i];
    }
    return max;
  };
  const handleChange = (e) => {
    e.persist();
    setStaff({ ...Staff, [e.target.id]: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
  };
  //Added function to get max id

  return (
    <>
      <Container className="AppContainer">
        <h4 className="PageHeading">Enter Empolyee Informations</h4>
        <form className="form" onSubmit={AddStaff}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Employee Code
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Code"
                  id="Code"
                  onChange={handleChange}
                  value={Staff.Code}
                  placeholder="Enter Staff Code"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Employee Name
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={handleChange}
                  value={Staff.Name}
                  placeholder="Enter Staff Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                Employee Address
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Address"
                  id="Address"
                  onChange={handleChange}
                  value={Staff.Address}
                  placeholder="Staff Address"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="NIC" sm={2}>
                Empolyee NIC
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="NIC"
                  id="NIC"
                  onChange={handleChange}
                  value={Staff.NIC}
                  placeholder="Staff NIC"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Salary" sm={2}>
                Empolyee Salary
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Salary"
                  id="Salary"
                  onChange={handleChange}
                  value={Staff.Salary}
                  placeholder=" Enter Empolyee Salary"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Age" sm={2}>
                Empolyee Age
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Age"
                  id="Age"
                  onChange={handleChange}
                  value={Staff.Age}
                  placeholder=" Enter Empolyee Age"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Occupation" sm={2}>
                Empolyee Occupation
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Occupation"
                  id="Occupation"
                  onChange={handleChange}
                  value={Staff.Occupation}
                  placeholder=" Enter Empolyee Occupation"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="EmailID" sm={2}>
                Empolyee EmailID
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="EmailID"
                  id="EmailID"
                  onChange={handleChange}
                  value={Staff.EmailID}
                  placeholder=" Enter Empolyee EmailID"
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
                  onClick={AddStaff}
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
        </form>
      </Container>
    </>
  );
}

export default AddStaff;
