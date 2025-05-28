import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();
  const HandleSignup = async (e) => {
    e.preventDefault();
    const obj = {
      name: userName.current.value,
      email: userEmail.current.value,
      password: userPassword.current.value,
    };

    try {
      const res = await axios.post("http://localhost:4000/signup", obj);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signincontainer">
      <form onSubmit={HandleSignup}>
        {" "}
        <h1> Eommerce</h1>{" "}
        <h1 className="h3 mb-3 fw-normal">Please Sign Up </h1>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="text"
            className="form-control"
            ref={userName}
            id="floatingInput"
            placeholder="name@example.com"
          />{" "}
          <label htmlFor="floatingInput">Please Enter Your Name</label>{" "}
        </div>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="email"
            ref={userEmail}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />{" "}
          <label htmlFor="floatingInput">Email address</label>{" "}
        </div>{" "}
        <div className="form-floating">
          {" "}
          <input
            type="password"
            ref={userPassword}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />{" "}
          <label htmlFor="floatingPassword">Password</label>{" "}
        </div>{" "}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Register Me
        </button>{" "}
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>{" "}
      </form>
    </div>
  );
};
export default SignUp;
