// import { useState } from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  // const [formik.values, setformik.values] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const changeHandler = (e) => {
  //   console.log(e.target.value);
  //   setformik.values({ ...formik.values, [e.target.name]: e.target.value });
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  console.log(formik.values);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("...submitted");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
          />
        </div>
        <button>submit</button>
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
