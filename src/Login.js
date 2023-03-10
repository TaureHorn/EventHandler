import React, { useState } from "react";

function Login(props) {
  const [disabled, setDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);

    props.client
      .login(e.target.username.value, e.target.password.value)
      .then((response) => {
        setDisabled(false);
        props.loggedIn(response.data.token);
      })
      .catch(() => {
        alert("an error occursed, please try again");
        setDisabled(false);
      });
  };

  return (
    <div className="login-form">
      <h1 className="login-text-login">Login</h1>
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-text">username</div>
        <input type="text" name="username" disabled={disabled} />
        <br />
        <div className="form-text">password</div>
        <input type="password" name="password" disabled={disabled} />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
