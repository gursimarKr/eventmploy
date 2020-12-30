import React from 'react';
import signup from '../assets/images/signup.png';
import signupMob from '../assets/images/signup-mob.png';
import creditcard from '../assets/images/creditcard.png';
import Header from './snippet/Header';
import Footer from './snippet/Footer';

const Payment = () => {
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
						<h1 className="mw-100">Please enter your <span>payment</span> details</h1>
						
						<div className="form-area pt-md-3 pt-2">
							<form action="/">
								<div className="form-row">
									<div className="form-group col-12">
										<img src={creditcard} className="img-fluid" alt="card" />
									</div>
									<div className="form-group col-12">
										<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
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
export default Payment