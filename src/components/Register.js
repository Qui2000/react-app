import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Register = (props) => {
  const { isPassword } = props;
  const { changeTypePassword } = props;
  const [cities, setCities] = useState([
    { value: "danang", name: "Da Nang" },
    { value: "hochiminh", name: "Ho Chi Minh" },
    { value: "hannoi", name: "Ha Noi" },
    { value: "other", name: "Other" },
  ]);

  const [user, setUser] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const type = isPassword ? "password" : "text";

  const handleFormChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === ""
    )
      alert("Email and password cannot be left blank ");
    else if (user.password.length < 6)
      alert("Password must be longer than 6 characters");
    else props.onRegister(user);
  };

  return (
    <div
      className="register-form my-5"
      style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-header text-center">Register</div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="register-firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="register-firstName"
                value={user.firstName}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="register-lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="register-lastName"
                value={user.lastName}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="login-firstName" className="form-label">
                Address
              </label>
              <select
                name="address"
                id="city"
                className="form-control"
                onChange={handleFormChange}
              >
                <option value="">--Select City---</option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="register-email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="register-email"
                onChange={handleFormChange}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="register-password" className="form-label">
                Password
              </label>
              <div className="d-flex  align-items-center">
                <input
                  type={type}
                  name="password"
                  className="form-control"
                  id="register-password"
                  onChange={handleFormChange}
                  placeholder="......."
                />
                {isPassword ? (
                  <i
                    className="fa fa-eye ml-2"
                    aria-hidden="true"
                    onClick={changeTypePassword}
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye-slash ml-2"
                    aria-hidden="true"
                    onClick={changeTypePassword}
                  ></i>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label me-2" htmlFor="term-condition">
                <input
                  id="term-condition"
                  type="checkbox"
                  name="termCondition"
                  className="me-2"
                  onChange={() => setIsDisabled(!isDisabled)}
                />
                I've read and accept the term & conditions
              </label>
            </div>
            <div className="text-center">
              {isDisabled ? (
                <button type="submit" className="btn btn-primary" disabled>
                  Register
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
