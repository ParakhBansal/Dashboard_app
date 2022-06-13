import "../../theme_styles/login/form.css";
import icon from "../../assets/img/icon1.png";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { GoogleLogin } from 'react-google-login';


function Form(props) {

  const [erroremail, seterroremail] = useState(<div></div>);
  const [errorpass, seterrorpass] = useState(<div></div>);
  const regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [flag1, setflag1] = useState(1);
  const [flag2, setflag2] = useState(1)

  const inputfocus = useRef(null);

  const responseGoogle = () => {
    sessionStorage.setItem('email', "googlelogin");
    props.fun(true);
   
  }
  
  function handlesubmit(e) {
    e.preventDefault();
    if ((flag1 === 0) && (flag2 === 0)) {
      props.fun(true);
      sessionStorage.setItem('email', document.querySelectorAll(".inputs")[0].value);
      document.querySelectorAll(".inputs").forEach((input) => {
        input.value = "";
      })
      setflag1(1);
      setflag2(1);
    }
    else {
      alert("Please Fill Correct Details to Proceed");
      if (flag1 === 1) {
        seterroremail(<div className="errormsg"> Invalid Email-Id </div>);
      }
      if (flag2 === 1) {
        seterrorpass(<div className="errormsg"> Password must be min. 8 characters </div>);
      }
    }
  }
  console.log(useMemo(() => computeadd(5, 6), [5, 6]));
  function handleblur1(e) {
    if (!regemail.test(e.target.value)) {
      seterroremail(<div className="errormsg"> Invalid Email-Id </div>);
      setflag1(1);
    }
    else {
      setflag1(0);
    }
  }
  function computeadd(a, b) {
    console.log(67);
    return a + b;
  }
  useEffect(() => {
    inputfocus.current.focus();
  }, [])
  function handlefocus1(e) {
    seterroremail(<div></div>)
  }
  function handlefocus2(e) {
    seterrorpass(<div></div>)
  }
  function handleblur2(e) {
    console.log(inputfocus.current);
    if (e.target.value.length < 8) {
      seterrorpass(<div className="errormsg"> Password must be min. 8 characters </div>)
      setflag2(1);
    }
    else {
      setflag2(0);
    }
  }
  return (
    <div className="formparent">
      <form action="">
        <div className="formhead">
          <img src={icon} alt="icon" />
          <span className="formtxt">
            Login To Explore
          </span>
        </div>
        <div className="input">
          <input type="email" className="inputs" ref={inputfocus} onFocus={handlefocus1} onBlur={handleblur1} placeholder="Email-Id" />
        </div>
        {erroremail}
        <div className="input">
          <input type="password" className="inputs" onFocus={handlefocus2} onBlur={handleblur2} placeholder="Password" />
        </div>
        {errorpass}
        <div className="submitp">
          <button className="submit" onClick={handlesubmit}>Log In</button>
        </div>
        <div className="submitp">
        <GoogleLogin
    clientId="348833756924-if92cbqma9h7kahgrralulu9uj7j52rg.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={(res)=>{console.log(res);}}
    className="googlelogin"
  /></div>
        <div className="forgotsignup">
          <a href="#" onClick={() => { alert("you clicked forgot password") }}>Forgot Password</a>
          <a href="#" onClick={() => { alert("you clicked Sign Up") }}>Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
