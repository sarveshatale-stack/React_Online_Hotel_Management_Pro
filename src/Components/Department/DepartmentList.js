import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Save_Department_From = "REACT.AddDepartment";

function DepartmentList(props) {
  const [Department, getDepartment] = useState([]);

  useEffect(() => {
    PopulateEmployee();
  }, [props.value]);

  const PopulateEmployee = () => {
    const saveEmp = JSON.parse(localStorage.getItem(Save_Department_From));
    if (saveEmp) {
      getDepartment(saveEmp);
    }
  };

  const handledeleteEmployee = (id) => {
    if (window.confirm("Are you sure? Click OK to delete this record.")) {
      console.log(Department);
      var newDepartmentList = Department.filter((emp) => emp.id != id);
      console.log(newDepartmentList);
      getDepartment(newDepartmentList);
      localStorage.setItem(
        Save_Department_From,
        JSON.stringify(newDepartmentList)
      );
    }
  };

  return (
    <div className="AppContainer">
      <h4 className="PageHeading" align="center">
        Department List
      </h4>
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Head</th>
            <th>Department Phone</th>
            <th>Department EmailID</th>
            <th colSpan="4">Action</th>
          </tr>
        </thead>
        <tbody>
          {Department.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.DepName}</td>
                <td>{item.DepHead}</td>
                <td>{item.DepPhone}</td>
                <td>{item.DepEmail}</td>
                <td>
                  <Link
                    to={"/Edit?Depid=" + item.id}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <input
                    className="btn btn-danger"
                    type="button"
                    value="x"
                    onClick={() => handledeleteEmployee(item.id)}
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DepartmentList;
