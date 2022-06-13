
import { Routes, Route } from "react-router-dom";
import App from "./components/App";
import Dashboard from './components/dashboard/Dashboard';
import User from "./components/dashboard/content/User";
import Blog from "./components/dashboard/content/Blog";
import Home from "./components/dashboard/content/Home";
import About from "./components/dashboard/pages/About";

function routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Dashboard" element={<Dashboard />} >
                    <Route path="User" element={<User />} />
                    <Route path="Blog" element={<Blog />} />
                    <Route path="Home" element={<Home />} />
                </Route>
                <Route path="/About" element={<About/>} />
            </Routes>
        </div>
    )
}

export default routing
