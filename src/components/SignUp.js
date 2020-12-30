import React from 'react';
import signup from '../assets/images/signup.png';
import signupMob from '../assets/images/signup-mob.png';

const SignUp = () => {
    return(
        <div>
        <main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${signup})`}}>
				<img src={signupMob} className="w-100 d-block d-md-none" alt="image" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1>Let’s get you started</h1>
						
						<div className="form-area pt-md-3 pt-2">
							<form action="/">
								<div className="form-row">
									<div className="form-group col-6">
										<div className="form-field">
											<label>First Name</label>
											<input type="text" className="form-control" value="Nicola" />
										</div>
									</div>
									<div className="form-group col-6">
										<div className="form-field">
											<label>Last Name</label>
											<input type="text" className="form-control" value="Bond" />
										</div>
									</div>
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
										<div className="form-field">
											<label>Confirm Password</label>
											<input type="password" className="form-control" value="Confirm Password" />
										</div>
									</div>
									<div className="form-group py-2 col-12">
										<div className="custom-control mb-2 custom-checkbox">
										  <input type="checkbox" className="custom-control-input" id="customCheck_agree"/>
										  <label className="custom-control-label" for="customCheck_agree">Agree to our Terms, Privacy Policy, and End user license agreement</label>
										</div>
                                    </div>
										<div className="custom-control mb-2 custom-checkbox">
										  <input type="checkbox" className="custom-control-input" id="customCheck_receiving"/>
										  <label className="custom-control-label" for="customCheck_receiving">I agree to receiving communications</label>
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
        </div>
    )
}
export default SignUp