import React from 'react';
import signup from '../assets/images/signup.png';
import signupMob from '../assets/images/signup-mob.png';
import Footer from './snippet/Footer';
import Header from './snippet/Header';
import {
    Link
  } from "react-router-dom";
const Login = () => {
    return(
        <>
        <Header/>
		<main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${signup})`}}>
				<img src={signupMob} className="w-100 d-block d-md-none" alt="image" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1>Let’s get you <span>logged-in</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt molestie libero non vestibulum.</p>
						
						<div className="form-area pt-md-3 pt-2">
							<form action="/">
								<div className="form-row">
									<div className="form-group col-12">
										<div className="form-field">
											<label>Email</label>
											<input type="text" className="form-control" value="Nicola@alkye.com" />
										</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Password</label>
											<input type="password" className="form-control" value="Password" />
										</div>
									</div>
									<div className="form-group col-12">
										<Link to="/forgot-password" className="btn-link text-primary">Forgot password?</Link>
									</div>
									<div className="form-group col-12">
										<Link to="/dashboard"><button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button></Link>

										<p>The information you provide on this form will be retained and handled by TheMode in accordance with our Privacy Policy.</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>

        <Footer/>
        </>
    )
}
export default Login