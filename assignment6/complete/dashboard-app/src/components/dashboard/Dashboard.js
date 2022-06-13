import React from 'react'
import "../../theme_styles/dasboard/dashboard.css";
import Headdash from './Headdash';
import Sidebar from './Sidebar';
import Dashcontent from './Dashcontent';
import { Provider } from "react-redux";
import store from "../../Store/Store"

function Dashboard() {

    return (
        <Provider store={store}>
            <div className="dashboard">
                <Headdash path="/About" name="About" />
                <div className="dash">
                    <Sidebar />
                    <Dashcontent />
                </div>
            </div>
        </Provider>
    )
}

export default Dashboard
