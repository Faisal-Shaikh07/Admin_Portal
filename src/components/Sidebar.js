import React, { Component } from "react";
import "../styles/Sidebar.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    handleLogout = () => {
        // Perform logout logic here, such as clearing user session or tokens
        localStorage.clear();
        // Redirect to the authentication page
        window.location.href = '/auth';
      };

    render() {
        return (

            <div className="sidebar">
                <ul>
                    <Link to={"/Account"} style={{ textDecoration: "none", color: "white" }}>
                        <li><AccountCircleIcon />Account</li>
                    </Link>
                    {/* <li><PeopleAltIcon />Customers</li>
                       <li><BusinessCenterIcon />Companies</li>
                        <li><AccountCircleIcon />Account</li>
                       <li><SettingsIcon />Settings</li> */}
                    <Link to={"/Dashboard"} style={{ textDecoration: "none", color: "white" }}>
                        <li><PeopleAltIcon /> Dashboard</li>
                    </Link>
                    <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                        <li onClick={this.handleLogout}><SettingsIcon /> Logout</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
