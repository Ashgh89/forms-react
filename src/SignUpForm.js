// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// 1.
const initialValues = {
  name: "",
  email: "",
  password: "",
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
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log("errors", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
            name="name"
          />
          {/* formik.touched.name -> when we click on input, we got error if it is empty */}
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps("email")}
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="password"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.password}
            {...formik.getFieldProps("password")}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">submit</button>
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
