import { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log("...submitted");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.name}
            name="name"
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.email}
            name="email"
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="password"
            onChange={changeHandler}
            value={userData.password}
            name="password"
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};
export default SignUpForm;