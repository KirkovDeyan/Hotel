import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [recValue, setRecValue] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { email: email, password: password };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeadTitle />
      <Box className="container">
        <Box className="sign-box">
          <p>
            Enter your e-mail and password below to log in to your account and
            use the benefits of our website.
          </p>
          <form action="" onSubmit={submitForm}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <Box className="flex_space">
              <Box className="flex">
                <input type="checkbox" />
                <label>Remember Me</label>
              </Box>
              <Box className="flex">
                <span>I forgot my password</span>
              </Box>
            </Box>

            <Button type="submit" className="primary-btn">
              Sign In
            </Button>
            <p>
              Don't have account? <Link to="/register">Signup!</Link>
            </p>
          </form>
        </Box>
      </Box>

      <Box>
        {recValue.map((cureentValue) => {
          return (
            <>
              <Box className="sign-box">
                <Typography variant="h1">Sign-In Successfully</Typography>
                <Typography variant="h3">
                  Email : <p>{cureentValue.email}</p>
                </Typography>
                <Typography variant="h3">
                  Password : <p>{cureentValue.password}</p>
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Login;
