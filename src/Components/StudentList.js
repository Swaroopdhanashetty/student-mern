import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTable from "./StudentTable";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/students/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTable obj={res} key={i} />;
    });
  };
  return (
    <div class="container">
      <div class="row d-flex justify-content-center">
        <h2 className="d-flex justify-content-center pb-2">Students List</h2>
        <div class="col-10">
          <table class="table table-bordered">
            <thead>
              <tr className=" text-center">
                <th scope="col">Name</th>
                <th scope="col">Age</th>

                <th scope="col ">Actions</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default StudentList;
