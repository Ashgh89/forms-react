const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="formControl">
      {/* html="name and id name means if we click on name text it will focus as well" */}
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // onBlur={formik.handleBlur}

        // value={formik.values.name}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {/* formik.touched.name -> when we click on input, we got error if it is empty */}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
