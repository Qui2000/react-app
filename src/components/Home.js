import React, { Fragment, useState } from "react";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Setting from "./Setting";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const [isSetting, setIsSetting] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [users, setUsers] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    },
  ]);

  const changeLoginRegisterForm = () => setIsRegister(!isRegister);;

  const helloName = () => {
    return userLoggedIn.map(
      (user) => `Hello ${user.firstName} ${user.lastName}`
    );
  };

  const onRegister = (item) => {
    let user = users.filter((user) => user.email === item.email);

    if (user.length > 0) alert("This email has been used");
    else {
      setUsers([...users, item]);
      setIsRegister(!isRegister);
    }
  };

  const onLogin = (item) => {
    let user = users.filter(
      (user) => user.email === item.email && user.password === item.password
    );

    if (user.length > 0) {
      setIsAuthenticated(true);
      setUserLoggedIn(user);
      setIsShow(false);
    } else alert("Login information is not correct");
  };

  const onUpdate = (item) => {
    setUserLoggedIn(userLoggedIn.map((user) => item));
    setUsers(
      users.map((user) => {
        if (user.id === item.id) return item;
        return user;
      })
    );
    setIsSetting(false);
  };

  const onLogout = () => {
    setUserLoggedIn();
    setIsAuthenticated(false);
    setIsShow(true);
  };

  const changeFormSetting = () => {
    setIsSetting(!isSetting);
  };

  const headerAction = {
    helloName,
    changeLoginRegisterForm,
    onLogout,
    changeFormSetting,
  };

  const settingAction = {
    onUpdate,
    changeFormSetting,
  };

  return (
    <Fragment>
      <Header isAuthenticated={isAuthenticated} headerAction={headerAction} />
      {isAuthenticated && isSetting ? (
        <Setting userLoggedIn={userLoggedIn} settingAction={settingAction} />
      ) : (
        <Fragment>
          {isRegister ? (
            <Register
              onRegister={onRegister}
            />
          ) : (
            <Fragment>
              {isShow ? <Login onLogin={onLogin} /> : <div></div>}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
