import React from 'react'
import "../../theme_styles/dasboard/dashboard.css";
import Headdash from './Headdash';
import Sidebar from './Sidebar';
import Dashcontent from './Dashcontent';

function Dashboard(){
 
        return (
            <div className="dashboard">
                <Headdash path="/About" name="About" />
                <div className="dash">
                    <Sidebar />
                    <Dashcontent />
                </div>
            </div>
        )
    
}

export default Dashboard
