import Login from "./login/Login";
import Dashboard from './dashboard/Dashboard';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


function App(props) {

    const [isloggedin, setisloggedin] = useState(false);

    localStorage.setItem("addedusers", []);
    localStorage.setItem("addedblogs", []);

    function updatefun(attribute) {
        setisloggedin(attribute);
    }
    if (sessionStorage.getItem("email")) {
        return <Navigate to="/Dashboard/Home" />;
    }
    return <Login isloggedin={false} fun={updatefun} />

}

export default App
