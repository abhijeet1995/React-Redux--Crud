import React, {Fragment} from "react";
import {Link} from 'react-router-dom';

let Navbar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link  to="/" className="navbar-brand">Exmployee Portal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link  to="/" className="nav-link">Home</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};
export default Navbar;