import React from "react";
import "./Header.css";
import Logo from "../../Images/motv.svg";

function Header() {
    return (
        <header className="site-header">
            <img src={Logo} alt="logo" className="site-header-logo" />
        </header>
    );
}

export default Header;
