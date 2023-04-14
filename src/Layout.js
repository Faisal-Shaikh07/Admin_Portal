import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Account from "./components/Account";
import { Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth";
import Logout from "./components/Logout";

function Layout() {

    const isAuth = parseInt(localStorage.getItem('isAuth')) || 0;
    console.log({ isAuth })
    const [isAuthenticated, updateAuthenticated] = React.useState(isAuth);

    if (!isAuthenticated) {
        return (
            <>
                <Auth updateAuth={updateAuthenticated} />
            </>
        );
    }

    return (
        <>

            <div style={{ display: "flex" }}>
                <Sidebar />
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/' element={<Logout />} />
                </Routes>
            </div>

        </>
    )
}

export default Layout;