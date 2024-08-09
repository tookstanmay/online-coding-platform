import React from "react";
import "../index.css";

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-first-container">
                    <img src="/public/images/code.png" className="logo-image" alt=""/>
                    <span className="logo">CodeCrew</span>
                </div>
                <h3 className="title">Online IDE Platform</h3>
            </div>
            <hr className="rule" />
        </>
    );
}