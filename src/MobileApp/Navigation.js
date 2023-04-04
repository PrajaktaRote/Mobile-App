import React from 'react';
import "../App.css";
const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " id="navbar1">
                <div className="container-fluid nav-color pe-5">
                        <span className="navbar-brand nav-title text-light"><i><b>Mobile App</b></i></span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav  navbar">
                            
                            <a><span className="nav-link text_color">Home</span></a>
                    
                                    <span className="nav-link text_color">Login</span>
                            
                                    <span className="nav-link text_color">Register</span>
                            
                                <a ><span className="nav-link text_color">About</span></a>
            
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation