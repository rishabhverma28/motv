import React, { Component } from "react";
import "./Header.css";
import Logo from "../../Images/motv.svg";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            prevPos: window.pageYOffset
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        window.pageYOffset > 50
            ? this.setState({ hidden: false })
            : this.setState({ hidden: true });
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <header
                className={
                    this.state.hidden ? "site-header" : "site-header color"
                }
            >
                <Link to="/">
                    <img src={Logo} alt="logo" className="site-header-logo" />
                </Link>
            </header>
        );
    }
}

export default Header;
