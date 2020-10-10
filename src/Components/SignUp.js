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
const Save_User_Sign_From = "REACT.UserSignUp";
const initialObj = {
  UserName: "",
  UserEmailId: "",
  Password: "",
  UserRole: "",
  id: 0
};
function UserSignUp(props) {
  const [User, setUser] = useState(initialObj);

  useEffect(() => {}, [User]);

  const SignUp = (e) => {
    if (
      !User.UserName ||
      !User.UserEmailId ||
      !User.Password ||
      !User.UserRole
    ) {
      alert("Please enter User data");
      return;
    }
    if (User.id === 0) {
      let user = { ...User }; // copying the old datas array

      const saveUser = JSON.parse(localStorage.getItem(Save_User_Sign_From));
      if (saveUser) {
        let newId = getMax(saveUser, "id") + 1;
        user.id = newId;
        console.log(user.id);
        saveUser.push(user);
        localStorage.setItem(Save_User_Sign_From, JSON.stringify(saveUser));
      } else {
        user.id = 1;
        localStorage.setItem(Save_User_Sign_From, JSON.stringify([user]));
      }
      setUser(initialObj);
      flag = !flag;
    }
  };

  //Added function to get max id
  const getMax = (arr, prop) => {
    console.log("button clicked!");
    var max;
    console.log("Array" + arr);
    for (var i = 0; i < arr.length; i++) {
      if (max == null || arr[i][prop] > max[prop]) max = arr[i];
      console.log(max);
    }
    return max;
  };
  const handleChange = (e) => {
    e.persist();
    setUser({ ...User, [e.target.id]: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
  };
  //Added function to get max id

  return (
    <>
      <Container className="AppContainer">
        <h4>Enter Department Informations</h4>
        <form className="form" onSubmit={SignUp}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                User Name
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="UserName"
                  id="UserName"
                  onChange={handleChange}
                  value={User.UserName}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                User EmailId
              </Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="UserEmailId"
                  id="UserEmailId"
                  onChange={handleChange}
                  value={User.UserEmailId}
                  placeholder="Enter EmailID"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Password
              </Label>
              <Col sm={5}>
                <Input
                  type="password"
                  name="Password"
                  id="Password"
                  onChange={handleChange}
                  value={User.Password}
                  placeholder="Enter Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                User Role
              </Label>
              <Col sm={5}>
                <select
                  name="UserRole"
                  id="UserRole"
                  onChange={handleChange}
                  value={User.UserRole}
                >
                  <option>Please Select</option>
                  <option>Owner</option>
                  <option>Manager</option>
                  <option>Receptionist</option>
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
                  onClick={SignUp}
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

export default UserSignUp;
