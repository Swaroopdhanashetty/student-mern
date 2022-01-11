import React, { useState } from "react";
import StudentForm from "./StudentForm";
import axios from "axios";

const CreateStudent = () => {
  const [formValue, setFormValue] = useState({ name: "", age: "" });

  const onSubmit = (studentObject) => {
    console.log(studentObject);
    axios
      .post("http://localhost:9000/students/", studentObject)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          alert("Student successfully created");
        } else {
          const a = Promise.reject();
          console.log(a);
        }
      })
      .catch((err) => alert("Somthing went wrong"));
  };
  return (
    <StudentForm
      initialValues={formValue}
      enableReinitialize
      onSubmit={onSubmit}
    >
      Create Student
    </StudentForm>
  );
};
export default CreateStudent;
