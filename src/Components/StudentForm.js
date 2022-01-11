import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    age: Yup.number().required("Requird"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <h1>Create Student</h1>
          <FormGroup className="p-2">
            <lable>Name</lable>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="p-2">
            <label>Age</label>
            <Field name="age" type="number" className="form-control" />
            <ErrorMessage
              name="age"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="text-center py-3">
            <Button
              variant="danger"
              className="align-items-center"
              size="lg"
              block="block"
              type="submit"
            >
              {props.children}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default StudentForm;
