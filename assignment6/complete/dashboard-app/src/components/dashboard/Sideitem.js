import React from 'react';
import "../../theme_styles/dasboard/sideitem.css";
import { NavLink } from "react-router-dom";


function Sideitem(props){
  
        return (
            
            <div className="sideitem">
                <NavLink activeClassName="active" to={props.text=="Home" ? "Home" :props.text}>
                <span>{props.svg}</span>
                {props.text}</NavLink>
            </div>
        )
    
}

export default Sideitem
