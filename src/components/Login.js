import React, { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;

    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "")
      alert("Email and password cannot be left blank ");
    else props.onLogin(user);
  };

  return (
    <div
      className="login-form my-5"
      style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-header text-center">Login</div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleFormChange}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleFormChange}
                id="login-password"
                placeholder="......."
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
