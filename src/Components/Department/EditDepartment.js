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
    console.log("call");
    const saveDep = JSON.parse(localStorage.getItem(Save_Department_From));
    if (saveDep) {
      console.log(saveDep);
      const query = new URLSearchParams(this.props.location.search);
      console.log(query);
      const id = query.get("Depid");
      console.log(id);
      const newdata = saveDep.map((data) => {
        let Compareid = data.id.toString();
        if (id === Compareid) {
          this.setState({
            DepName: data.DepName,
            DepHead: data.DepHead,
            DepPhone: data.DepPhone,
            DepEmail: data.DepEmail
          });
        }
      });
      //let newDepartmentList;
      //for (let i = 0; i < saveDep.length; i++) {
      // console.log(saveDep.id[i].id);
      // if(saveDep.id[i].id)
      // {
      //     console.log("insdie call2");
      //     newDepartmentList=saveDep[i];
      //     console.log(saveDep[i]);
      //}

      //}
      // saveDep.find((element) => {
      //   return element.title === title;
      // })
      // var newDepartmentList = saveDep.find(id);
      // console.log(newDepartmentList);
      // this.setState({
      //   DepName: newDepartmentList.DepName,
      //   DepHead: newDepartmentList.DepHead,
      //   DepPhone: newDepartmentList.DepPhone,
      //   DepEmail: newDepartmentList.DepEmail
      // });
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
    e.preventDefault();
    const obj = {
      Id: this.props.match.params.id,
      DepName: this.state.DepName,
      DepHead: this.state.DepHead,
      DepPhone: this.state.DepPhone,
      DepEmail: this.state.DepEmail
    };

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
