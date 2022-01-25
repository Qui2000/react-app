import React, { useState } from "react";

const Setting = (props) => {
  const { settingAction } = props;
  const [cities, setCities] = useState([
    { value: "danang", name: "Da Nang" },
    { value: "hochiminh", name: "Ho Chi Minh" },
    { value: "hannoi", name: "Ha Noi" },
    { value: "other", name: "Other" },
  ]);

  const [user, setUser] = useState({
    id: props.userLoggedIn[0]["id"],
    firstName: props.userLoggedIn[0]["firstName"],
    lastName: props.userLoggedIn[0]["lastName"],
    address: props.userLoggedIn[0]["address"],
    email: props.userLoggedIn[0]["email"],
    password: props.userLoggedIn[0]["password"],
  });

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

    if (user.firstName === "" || user.lastName === "" || user.password === "")
      alert("User name and password cannot be left blank ");
    else if (user.password.length < 6)
      alert("Password must be longer than 6 characters");
    else settingAction.onUpdate(user);
  };

  return (
    <div
      className="login-form my-5"
      style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-header text-center">Update Account</div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="setting-firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleFormChange}
                className="form-control"
                id="setting-firstName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="setting-lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={user.lastName}
                onChange={handleFormChange}
                id="setting-lastName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="setting-address" className="form-label">
                Address
              </label>
              <select
                name="address"
                id="city"
                className="form-control"
                onChange={handleFormChange}
                value={user.address}
              >
                <option>--Select City---</option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="setting-password"
                onChange={handleFormChange}
                value={user.password}
                placeholder="......."
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary me-2">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={settingAction.changeFormSetting}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
