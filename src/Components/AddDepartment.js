import React, { useState, useEffect } from "react";
import DeleteDepartment from "./DeleteDepartment";
import axios from "axios";

const Save_Employee_From = "REACT.EmployeeForm";
const initialObj = { name: "", job: "", id: 0 };
let flag = true;
function AddDepartment(props) {
  //console.dir(props.match.params.id);
  const [employee, setemployee] = useState(initialObj);

  useEffect(() => {}, [employee]);

  const handleInsertemployee = (e) => {
    if (!employee.name || !employee.job) {
      alert("Please enter employee name and job");
      return;
    }
    if (employee.id === 0) {
      let emp = { ...employee }; // copying the old datas array

      const saveEmp = JSON.parse(localStorage.getItem(Save_Employee_From));
      if (saveEmp) {
        var newId = getMax(saveEmp, "id") + 1;
        emp.id = newId;
        saveEmp.push(emp);
        localStorage.setItem(Save_Employee_From, JSON.stringify(saveEmp));
      } else {
        emp.id = 1;
        localStorage.setItem(Save_Employee_From, JSON.stringify([emp]));
      }
      setemployee(initialObj);
      flag = !flag;
    }
  };

  const onChange = (e) => {
    e.persist();
    setemployee({ ...employee, [e.target.id]: e.target.value });
  };

  //Added function to get max id
  function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max;
  }
  //Added function to get max id

  return (
    <>
      <div className="container">
        {<DeleteDepartment value={flag}></DeleteDepartment>}
        <hr />
        <h2 className="primary-heading">Add Employee</h2>
        <form onSubmit={handleInsertemployee}></form>
        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-3">
            <label htmlFor="txtName" className="font-weight-bold">
              Department Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Employee Name"
              onChange={onChange}
              value={employee.name}
            ></input>
          </div>

          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-3">
            <label htmlFor="txtJob" className="font-weight-bold">
              Department Head Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="job"
              placeholder="Enter Job Title"
              onChange={onChange}
              value={employee.job}
            ></input>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-6 ">
            <input
              className="btn btn-success"
              type="submit"
              value="Submit"
              onClick={handleInsertemployee}
            ></input>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default AddDepartment;
