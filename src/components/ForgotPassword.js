import React from 'react';
import signupMob from '../assets/images/signup-mob.png';
import signup from '../assets/images/signup.png';
import Footer from './snippet/Footer';
import Header from './snippet/Header';

const ForgotPassword = () => {
    return(
        <>
        <Header/>
		<main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${signup})`}}>
				<img src={signupMob} className="w-100 d-block d-md-none" alt="imag" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1>Forgot <br/><span>password?</span></h1>
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
										<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>

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
export default ForgotPassword