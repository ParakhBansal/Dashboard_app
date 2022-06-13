
import React, { useState } from 'react';
import "../../theme_styles/login/Login.css";
import Head from "./Head"
import Form from "./Form";
import Footer from "./Footer"

function Login(props){


  return (
    <div className="parent">
        <Head />
        <Form isloggedin={props.isloggedin} fun={props.fun}/>
        <Footer />
    </div>
    );

}

export default Login;
