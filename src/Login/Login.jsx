import React, { useState, useEffect } from "react";
import validator from "validator";

import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [isdisabled, setIsDisabled] = useState(true);
  // const [allEntry, setAllEntry] = useState();
  const navigate = useNavigate();

  const validateEmail = (e) => {
    var email = e.target.value;
    var valid = validator.isEmail(email);
    if (valid) {
      setEmailError("Valid Email :)");
      setIsDisabled(false);
    } else {
      setEmailError("Enter valid Email!");
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/", { replace: true });
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    localStorage.setItem("login", true);
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="div" style={{ backgroundColor: "orange" }}>
        <div className="row ">
          <div className="col-md-12 login  mt-5 text-center">
            <form onSubmit={submitForm}>
              <div>
                <label>Email </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => validateEmail(e)}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />

                <span
                  style={{
                    fontWeight: "bold",
                    color: "orange",
                  }}
                >
                  {emailError}
                </span>
              </div>
              <br />
              <div>
                <label>Password </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  disabled={isdisabled || !password}
                  className="btn btn-warning"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
