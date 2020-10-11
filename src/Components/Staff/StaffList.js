import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Save_Staff_From = "REACT.AddStaff";

function StaffList(props) {
  const [Staff, getStaff] = useState([]);

  useEffect(() => {
    PopulateEmployee();
  }, [props.value]);

  const PopulateEmployee = () => {
    const saveEmp = JSON.parse(localStorage.getItem(Save_Staff_From));
    if (saveEmp) {
      getStaff(saveEmp);
    }
  };

  const handledeleteEmployee = (id) => {
    if (window.confirm("Are you sure? Click OK to delete this record.")) {
      var newDepartmentList = Staff.filter((emp) => emp.id != id);
      console.log(newDepartmentList);
      getStaff(newDepartmentList);
      localStorage.setItem(Save_Staff_From, JSON.stringify(newDepartmentList));
    }
  };

  return (
    <div className="AppContainer">
      <h4 className="PageHeading" align="center">
        Staff List
      </h4>
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Employee Code</th>
            <th>Employee Name</th>
            <th>Employee Address</th>
            <th>Employee NIC</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
            <th>Employee Occupation</th>
            <th>Employee EmailID</th>
            <th colSpan="4">Action</th>
          </tr>
        </thead>
        <tbody>
          {Staff.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.Code}</td>
                <td>{item.Name}</td>
                <td>{item.Address}</td>
                <td>{item.NIC}</td>
                <td>{item.Salary}</td>
                <td>{item.Age}</td>
                <td>{item.Occupation}</td>
                <td>{item.EmailID}</td>
                <td>
                  <Link
                    to={"/EditStaff?Staffid=" + item.id}
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
export default StaffList;
