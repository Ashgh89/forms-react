// import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "./components/common/Input";
// 1.
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  passwordConfirm: "",
  password: "",
  gender: "",
};

// 2.
const onSubmit = (values) => {
  console.log(values);
};

// 3.
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) errors.name = "Name is Required";
//   if (!values.email) errors.email = "Email is Required";
//   if (!values.password) errors.password = "Password is Required";
//   return errors;
// };

// npm i yup and after that import * as Yup from "yup";
// 3.
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    //it must be just numbers [0-9] with 11 numbers
    .matches(/^[0-9]{11}$/, "Invalid phone number")
    .nullable(),
  password: Yup.string().required("Password is required"),
  // YOu don't need learn auswändig, just search them on google
  passwordConfirm: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  gender: Yup.string().required("Gender is required"),
});

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    // if formValues null then initialValues
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  console.log("errors", formik);

  useEffect(() => {
    axios
      //this id 1 is not gonna be 1 always, it can be 2,3 or whatever, so we use Params
      .get("http://localhost:3001/users/1")
      .then((res) => setFormValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" />
        <Input formik={formik} name="phoneNumber" label="Phone" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
          type="password"
        />

        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;

// (so far without formik)
// 1. managing state (done)
// 2. handling form submission (done)
// 3. validation - error message (not done)
// All of this with -> we can do with formik

// with formik
// npm i formik and after that import { useFormik } from "formik";
// after that we can delete our useState and changeHandler
// after that const formik = useFormik({
//   initialValues: {
//     name: "",
//     email: "",
//     password: "",
//   },
// });
// after that in our onChange and value, we can use formik things

// npm i yup and after that import * as Yup from "yup";
