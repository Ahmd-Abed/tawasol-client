import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/modules/users";

const Navbar = ({ users: { isAuthenticated }, logout }) => {
    const Links = (
        <ul>
            <li>
                <Link onClick={logout} to="/">
                    Logout
                </Link>
            </li>
        </ul>
    );

    const authLinks = (
        <ul>
            <li>
                <Link to="/login">
                    Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-navbar">
            <h1>
                <Link className="logo-navbar" to="/">
                    Tawasol
                </Link>
            </h1>
            <Fragment>
                {isAuthenticated ? Links : authLinks}
            </Fragment>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, { logout })(Navbar);