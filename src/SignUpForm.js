// import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import CheckboxInput from "./CheckboxInput";
import Input from "./components/common/Input";
import RadioInput from "./components/common/RadioInput";
import SelectComponent from "./components/common/SelectComponent";

const radioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const selectOptions = [
  { label: "Select Nationality ...", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "USA", value: "US" },
];
const checkBoxOptions = [
  { label: "React.js", value: "React.js" },
  { label: "Vue.js", value: "Vue.js" },
];
// 1.
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  passwordConfirm: "",
  password: "",
  gender: "",
  nationality: "",
  intrests: [], // ["React.js OR Vue.js"]
  terms: false,
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
  nationality: Yup.string().required("select nationality"),
  intrests: Yup.array().min(1).required("at least select one experties"),
  terms: Yup.boolean()
    // just search for it and u dont need auswändig machen
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
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
  console.log("errors", formik.values);

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

        <RadioInput formik={formik} radioOptions={radioOptions} name="gender" />
        <SelectComponent
          selectOptions={selectOptions}
          formik={formik}
          name="nationality"
        />
        <CheckboxInput
          formik={formik}
          checkBoxOptions={checkBoxOptions}
          name="intrests"
        />
        <input
          type="checkbox"
          id="terms"
          name="terms"
          value={true}
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor="terms">Terms and Conditions</label>

        {formik.errors.terms && formik.touched.terms && (
          <div className="error">{formik.errors.terms}</div>
        )}
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
