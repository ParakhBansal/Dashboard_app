import React, { useState } from 'react';
import logo from "../../assets/img/logo.png";
import "../../theme_styles/dasboard/headdash.css";
import { Navigate, NavLink } from 'react-router-dom';
import About from "../dashboard/pages/About";

function Headdash(props) {
    const [flag, setflag] = useState(true)

    function logout() {
        sessionStorage.setItem("email", "");
        setflag(false)
    }

    if (sessionStorage.getItem("email")) {
        return (
            <div className="headdash">
                <NavLink to="/Dashboard/Home" className="logohead"><div className="dashlogo">
                    <img src={logo} alt="logo" />
                    My Page
                </div></NavLink>
                <div className="nav">
                    <NavLink to={props.path} className="navitem">
                        {props.name}
                    </NavLink>
                </div>
                <button className="logout" onClick={logout}>LogOut</button>
            </div>
        )
    }
    else {
        return <Navigate to="/" />;;
    }

}

export default Headdash

