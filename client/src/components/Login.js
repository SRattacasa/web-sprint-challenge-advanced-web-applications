import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();

  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const login = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('login', creds)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      history.push("/bubbles")
    })

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div><form onSubmit={login}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="user name"
          //value={credentials.username}
          onChange={handleChange}
          /></label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="password"
          //value={credentials.password}
          onChange={handleChange}
          /></label>
        <button>Log in</button>
      </form></div>
    </>
  );
};

export default Login;
