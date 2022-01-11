import React from "react";
import { Button } from "react-bootstrap";

import axios from "axios";

const StudentTable = (props) => {
  const { _id, name, age } = props.obj;
  const deleteStudent = () => {
    axios
      .delete("http://localhost:9000/students/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("somthing went wrong"));
  };
  return (
    <tr className="text-center">
      <td>{name}</td>
      <td>{age}</td>
      <td className="">
        <Button className="btn btn-danger " onClick={deleteStudent} size="sm">
          Delete Student
        </Button>
      </td>
    </tr>
  );
};
export default StudentTable;
