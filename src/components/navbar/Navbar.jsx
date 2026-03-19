import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => {

    const menuItems = (
        <>
            <li><a to="/">Home</a></li>
            <li><a to="/">FAQ</a></li>
            <li><a to="/">Changelog</a></li>
            <li><a to="/">Blog</a></li>
            <li><a to="/">Download</a></li>
            <li><a to="/">Contact</a></li>

        </>
    );
    return (
        <div>
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {menuItems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Customer-Support CS</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end md:w-1/12 flex">
                    <button className="btn btn-gradient"><FaPlusCircle /> Button</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;