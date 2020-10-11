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
let flag = true;
const Save_Department_From = "REACT.AddDepartment";
const initialObj = {
  DepName: "",
  DepHead: "",
  DepEmail: "",
  DepPhone: "",
  id: 0
};
function AddDepartment(props) {
  const [Department, setDepatment] = useState(initialObj);

  useEffect(() => {}, [Department]);

  const AddDepatment = (e) => {
    if (
      !Department.DepName ||
      !Department.DepHead ||
      !Department.DepEmail ||
      !Department.DepPhone
    ) {
      alert("Please enter Department data");
      return;
    }
    if (Department.id === 0) {
      let dep = { ...Department }; // copying the old datas array

      const saveDep = JSON.parse(localStorage.getItem(Save_Department_From));
      if (saveDep.length >= 1) {
        let max;
        for (let i = 0; i < saveDep.length; i++) {
          if (max == null) max = saveDep.length;
        }
        // let newId = getMax(saveDep, "id") + 1;
        let newId = max + 1;
        dep.id = newId;
        saveDep.push(dep);
        localStorage.setItem(Save_Department_From, JSON.stringify(saveDep));
      } else {
        dep.id = 1;
        localStorage.setItem(Save_Department_From, JSON.stringify([dep]));
      }
      setDepatment(initialObj);
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
    setDepatment({ ...Department, [e.target.id]: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
  };
  //Added function to get max id

  return (
    <>
      <Container className="AppContainer">
        <h4 className="PageHeading">Enter Department Informations</h4>
        <form className="form" onSubmit={AddDepatment}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Department Name
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="DepName"
                  id="DepName"
                  onChange={handleChange}
                  value={Department.DepName}
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
                  id="DepHead"
                  onChange={handleChange}
                  value={Department.DepHead}
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
                  id="DepPhone"
                  onChange={handleChange}
                  value={Department.DepPhone}
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
                  id="DepEmail"
                  onChange={handleChange}
                  value={Department.DepEmail}
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
                  onClick={AddDepatment}
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

export default AddDepartment;
