// import { useState } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

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
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  console.log("errors", formik);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          {/* html="name and id name means if we click on name text it will focus as well" */}
          <label htmlFor="name">Name</label>
          <input
            id="name"
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
          <label>Phone</label>
          <input
            type="text"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps("phoneNumber")}
            name="phoneNumber"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="error">{formik.errors.phoneNumber}</div>
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
        <div className="formControl">
          <label>Password Confirmation</label>
          <input
            type="password"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.password}
            {...formik.getFieldProps("passwordConfirm")}
            name="passwordConfirm"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div>
        <div className="formControl">
          <input
            type="radio"
            id="0"
            name="gender"
            value="0"
            onChange={formik.handleChange}
            checked={formik.values.gender === "0"}
          />
          <label htmlFor="0">Male</label>
          <input
            type="radio"
            id="1"
            name="gender"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.gender === "1"}
          />
          <label htmlFor="1">Female</label>
        </div>

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
