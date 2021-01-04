import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import logoSm from '../../assets/images/logo-sm.png';
import logo from '../../assets/images/logo.png';

class Header extends Component {
    constructor(props){
        super(props);

        this.state= {
            Logo : ''
        }
    }

    render() {
        return(
            <header className="header w-100 position-absolute">
			<div className="container container-xxl">
				<nav className="navbar p-0 navbar-expand-md">
				  <Link className="navbar-brand p-md-0" to="/">
				  	<img src={logo} className="d-md-block d-none" alt="logo" />
				  	<img src={logoSm} className="d-md-none d-block" alt="logo" />
				  </Link>
				  <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"><img src="images/menu-bars.png" className="d-block" alt="bar" /></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <Link className="nav-link" to="/">home</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/jobs">jobs</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/post">post a job</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/blog">blog</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/login">login</Link>
				      </li>
				    </ul>
				    
				    <Link to="/sign-up" className="btn mb-md-0 mb-4 d-block d-md-inline-block btn-primary">sign-up</Link>
				  </div>
				</nav>
			</div>
		</header>
        );
    }
}
export default Header;