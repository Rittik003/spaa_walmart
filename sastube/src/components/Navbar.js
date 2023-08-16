import React, { useState } from "react";
import Logo from "./Logo";
import cartimg from "../components/image/trolley.png";

export default function Navbar(props) {
  const fun = () => {
    props.fun1();
  };
  const fun1 = () => {
    props.fun2();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid me">
          {<Logo />}
          <a
            className="nav-link active text-info mx-3"
            style={{color:"white",fontSize:"larger"}}
            aria-current="page"
            href="/"
          >
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto " id="list">
              <li
                className="text-info"
                style={{ marginTop: "1px", fontSize: "30px" }}
              >
                Hi! {props.name.toUpperCase()}{" "}
              </li>
              {!props.valid && (
                <li className="nav-item mx-2">
                  <a
                    className="nav-link active text-info "
                    aria-current="page"
                    href="/register"
                    style={{fontSize:"larger"}}
                  >
                    Register
                  </a>
                </li>
              )}
              {!props.valid && (
                <li className="nav-item mx-2">
                  <a className="nav-link text-info" href="/login" style={{fontSize:"larger"}}>
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item mx-2">
                <img
                  src={props.img}
                  alt="Image Icon"
                  style={{ marginTop: "9px" }}
                  width="30"
                  height="30"
                  onClick={fun}
                />
              </li>
              {props.valid && (
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    marginTop: "5px",
                    marginLeft: "4px",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  LogOut
                </button>
              )}
              {props.valid && (
                <img
                  src={cartimg}
                  style={{ width: "46px", height: "46px" }}
                  alt="error"
                  onClick={fun1}
                ></img>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
