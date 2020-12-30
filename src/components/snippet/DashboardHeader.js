import React from 'react';
import logoSm from '../../assets/images/logo-sm.png';
import user from '../../assets/images/user.png';
import menuBars from '../../assets/images/menu-bars.png';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    return(
        <>
		<aside className="sidebar d-flex flex-column">

			<div className="sidebar_logo d-flex align-items-center">
				<img src={logoSm} alt="logo" />
				<button className="btn text-secondary d-block d-lg-none btn-close ml-auto p-0"><i className="fas fa-times"></i></button>
			</div>
			
			<div className="sidebar_links flex-grow-1">
				<ul className="list-unstyled">
					<li><Link to="/">Home</Link></li>
				</ul>
				
				<h6>Jobs</h6>
				<ul className="list-unstyled">
					<li><Link to="/current-jobs" className="active">My Current jobs</Link></li>
					<li><Link to="/previous-jobs">My Previous jobs</Link></li>
					<li><Link to="/post">Post a new job</Link></li>
				</ul>
				
				<h6>Me</h6>
				<ul className="list-unstyled">
					<li><Link href="/my-ratings">My Ratings</Link></li>
					<li><Link to="/make-rating">Leave Rating</Link></li>
					<li><Link to="/calendar">My Calendar</Link></li>
					<li><Link to="/plans">Active Plan</Link></li>
				</ul>
			</div>

			<div className="sidebar_user d-flex align-items-center">
				<img src={user} className="d-block d-lg-none" alt="user" />
				<div>
					<strong className="text-truncate">Nicola Bond</strong>
					<div className="rating_stars text-primary">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star-half-alt"></i>
						<i className="far fa-star"></i>
					</div>
				</div>
			</div>
		</aside>

		<div className="header-dashboard d-flex align-items-center">
			<form action="/" className="d-none d-md-flex input-group input-group-search">
			  <div className="input-group-prepend">
			    <span className="input-group-text text-secondary pr-lg-2 pr-1 pl-ld-4 pl-3 border-0 bg-transparent" id="basic-addon1"><i className="fas fa-search"></i></span>
			  </div>
			  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search here" />
			</form>
			<a className="navbar-brand d-block d-md-none p-md-0" href="#">
			  	<img src={logoSm} alt="logo" />
			</a>

			<div className="header-controls d-flex align-items-center">
				<Link to="/notification" className="mr-4 mr-3"><i className="fas fa-bell"></i></Link>
				<Link to="/conversation" className="mr-4 mr-3"><i className="fas fa-comment-dots"></i><span className="badge badge-count">120</span></Link>
				<Link to="/profile" className="ur_short_name d-none d-md-block">NB</Link>
				<button className="btn btn-menu d-block d-lg-none p-0 ml-lg-0 ml-md-4"><img className="d-block" src={menuBars} alt="bar" /></button>
			</div>
		</div>

		<div className="body-search d-flex d-md-none">
			<form action="/" className="input-group input-group-search">
			  <div className="input-group-prepend">
			    <span className="input-group-text text-secondary pr-lg-2 pr-1 pl-ld-4 pl-3 border-0 bg-transparent" id="basic-addon1"><i className="fas fa-search"></i></span>
			  </div>
			  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search here" />
			</form>
		</div>


        </>
    )
}
export default DashboardHeader