import React, { useState } from "react";
import "./index.css";
import Facebook from "../assets/images/fb_icon.svg";
import Twitter from "../assets/images/Twitter.svg";
import { useNavigate } from "react-router-dom";

function Login() {

  const router = useNavigate();

  const handleClick = (route) => {
    router(route);
  };
  const [errorMessages, setErrorMessages] = useState({});


  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { uname, pass } = event.target.elements;   
    const userData = database.find((user) => user.username === uname.value);   
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setErrorMessages({});
        alert("User is successfully logged in");
        handleClick("/")
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
   const [isBtnEnabled,setIsBtnEnabled] = useState(true)
   const handleChange =(e) => {
    if(e.target.value.length === 0){
    setIsBtnEnabled(true)
   }
   else{
    setIsBtnEnabled(false)
  }
  }
return (
    <div className="Global__containter">
      <form onSubmit={handleSubmit}>
        <div className="login__containter">
          <div className="login__left">
            <div className="left__top">
              <h2 id="h2">Login</h2>
            </div>
            <div className="left__mid">
              <img id="fb" src={Facebook} alt="facebook" />
              <img id="tw" src={Twitter} alt="twitter" />
            </div>
            <div className="input">
              <h5 className="swith"> Or use your account</h5>
              <input
                className="input1"
                type="text"
                name="uname"
                placeholder="username"
                onChange={handleChange}
              />
              {errorMessages.name === "uname" && (
              <div className="error">{errorMessages.message}</div>
            )}
             <input
                className="input2"
                type="password"
                name="pass"
                placeholder="password"
                onChange={handleChange}
              />
               {errorMessages.name === "pass" && (
              <div className="error">{errorMessages.message}</div>
            )}
              <p className="par">Forgot user Password?</p>
              <button id="btn" type="submit" disabled={isBtnEnabled} >
                Login
              </button>
            </div>
          </div>
          <div className="login__right">
            <h1 id="right__heading_1">
              HTML CSS LOGIN <br />
              FORM
            </h1>
            <br />
            <h5 id="h5">
              this login form is created using pure
              <br /> HTML and CSS for social icons,
              <br /> fontAwesone is used
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
