import React from 'react';
import "../../theme_styles/dasboard/dashcontent.css";
import User from "./content/User";
import Blog from "./content/Blog";
import Home from "./content/Home";
import { Routes, Route } from "react-router-dom";

function Dashcontent() {

    return (
        <div className="dashcontent">
            <Routes>
                <Route path="User" element={<User />} />
                <Route path="Blog" element={<Blog />} />
                <Route path="Home" element={<Home />} />
            </Routes>
        </div>
    )

}

export default Dashcontent
