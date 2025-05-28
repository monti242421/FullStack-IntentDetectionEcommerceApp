import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();
  const HandleLogin = async (e) => {
    e.preventDefault();
    const obj = {
      email: userEmail.current.value,
      password: userPassword.current.value,
    };
    try {
      const res = await axios.post("http://localhost:4000/login", obj);
      alert("Successfully Logged in");
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.log("Login Failed", err);
    }
  };
  return (
    <div className="signincontainer">
      <form onSubmit={HandleLogin}>
        {" "}
        <h1> Eommerce</h1> <h1 className="h3 mb-3 fw-normal">Please sign in</h1>{" "}
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
          Sign in
        </button>{" "}
      </form>
      <Link to="/signup"> Dont have an Account?, Register Here</Link>
    </div>
  );
};
export default Login;
