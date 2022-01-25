import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { headerAction } = props;
  const { isAuthenticated } = props;

  return (
    <div>
      <header className="main-header">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">HOME</a>
            <form className="d-flex">
              {!isAuthenticated ? (
                <div>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                    onClick={headerAction.changeLoginRegisterForm}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-info me-2"
                    type="button"
                    onClick={headerAction.changeLoginRegisterForm}
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {headerAction.helloName()}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Account
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={headerAction.changeFormSetting}
                      >
                        Setting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={headerAction.onLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
