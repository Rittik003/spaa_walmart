import React, { useState } from "react";
import "../components/style.css";
import { useNavigate } from "react-router-dom";

export default function Registration(props) {
  document.body.style.backgroundColor = "aqua";
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e, key) => {
    setVal({ ...val, [key]: e.target.value });
  };

  const handleSubmit = () => {
    if (!val.name || !val.email || !val.password)
      window.alert("Fill The entire Section");
    if (isValidEmail(val.email)) {
      // Perform registration logic here
      //procedd the below code when we have active backend...
      {
        fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(val),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            localStorage.clear();
            localStorage.setItem("jwttoken", data.token);
            window.alert(data.mess);
            navigate("/");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("Invalid email address");
    }
    //procedd the below code when we have active backend...
    // else
    // {
    //   fetch("/register",{
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(val)
    //   }).then((res)=>{
    //     return res.json();
    //   }).then((data)=>{
    //     window.alert(data.mess);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // }
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleCancel = () => {
    setVal({ name: "", email: "", password: "" });
  };
  return (
    <>
      <div className="container text-info1">
        <h2>Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={val.name}
            onChange={(e) => handleChange(e, "name")}
            placeholder="abcde"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={val.email}
            onChange={(e) => handleChange(e, "email")}
            placeholder="123@gmail.com"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={val.password}
            onChange={(e) => handleChange(e, "password")}
            placeholder="**********"
            required
            className="form-control"
          />
        </div>
        <div className="button">
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
