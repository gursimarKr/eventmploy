import React, { useState } from 'react';
import signup from '../assets/images/signup.png';
import signupMob from '../assets/images/signup-mob.png';
import Layout from '../global/PrimaryLayout';
//import { Link, Redirect } from 'react-router-dom';
const SignUp = () => {
	const [errors, setErrors] = useState({});
	//const [redirect, setRedirect] = useState(false);
	const [fields, setFeilds] = useState({});
	const [liceneAgree, setLicenceAgree] = useState(false);
	const [formIsValid, setFormIsValid] = useState(true);

	const handleChange = (event) => {
		fields[event.target.name] = event.target.value;
		setFeilds(fields);
	}
	const handleSubmit = event => {
		event.preventDefault();
		let errors = {};
		//let formIsValid = true;
		if(!fields['firstName']){
			setFormIsValid(false);
			errors['firstName'] = "*Please enter your First Name.";
		}
		
		if(!fields['lastName']){
			setFormIsValid(false);
			errors['lastName'] = "*Please enter your Last Name.";
		}
		
		if(typeof fields['email'] !== 'undefined'){
			let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if(!pattern.test(fields['email'])){
				setFormIsValid(false);
				errors['email'] = "*Please enter valid Email Address.";
			}
		}

		if(!fields['password']){
			setFormIsValid(false);
			errors['password'] = "*Please enter your Password.";
		}
		
		if(!fields['confirmededPassword']){
			setFormIsValid(false);
			errors['confirmedPassword'] = "Please enter your confirm password.";
		}

		if(fields['password'] && fields['confirmPassword']){
			if(fields['password'] !== fields['confirmPassword']){
				errors['password'] = "Passwords don't match.";
			}
		}

		setErrors({...errors});
		//console.log('errors', errors);
		return formIsValid;
	}
	//console.log(fields);
	// const redirectTo = () => {
	// 	if(formIsValid){ 
	// 		setRedirect(!redirect)
	// 	}
	// 	if(redirect){
	// 		<Redirect to="/get-started" />
	// 	}
	// }
	
    return(<Layout>
        <main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${signup})`}}>
				<img src={signupMob} className="w-100 d-block d-md-none" alt="banner" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1>Let’s get you started</h1>
						
						<div className="form-area pt-md-3 pt-2">
							<form onSubmit={event => handleSubmit(event)}>
								<div className="form-row">
									<div className="form-group col-6">
										<div className="form-field">
											<label>First Name</label>
											<input 
											name="firstName"
											onChange={event => handleChange(event)}
											type="text" 
											className="form-control" 
											placeholder="Nicola" 
											/>
										</div>
										<div className="">{!(fields.firstName)? errors.firstName : null}</div>
									</div>
									<div className="form-group col-6">
										<div className="form-field">
											<label>Last Name</label>
											<input 
											type="text" 
											className="form-control" 
											placeholder="Bond" 
											name="lastName" 
											onChange={event => handleChange(event)}
											/>
										</div>
										<div className="">{!(fields.lastName)? errors.lastName : null}</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Email</label>
											<input 
											onChange={event => handleChange(event)}
											type="text" 
											className="form-control" 
											placeholder="Nicola@alkye.com"
											name="email" />
										</div>
										<div className="">{!(fields.email)? errors.email : null}</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Password</label>
											<input 
											onChange={event => handleChange(event)}
											type="password" 
											className="form-control" 
											placeholder="Password" 
											name="password"/>
										</div>
										<div className="">{!(fields.password)? errors.password : null}</div>
									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Confirm Password</label>
											<input 
											onChange={event => handleChange(event)}
											type="password" 
											className="form-control" 
											placeholder="Confirm Password"
											name="confirmPassword" />
										</div>
										<div className="">{!(fields.confirmedPassword)? errors.confirmedPassword : null}</div>
									</div>
									<div className="form-group py-2 col-12">
										<div className="custom-control mb-2 custom-checkbox">
										  <input 
										  type="checkbox" 
										  className="custom-control-input" 
										  id="customCheck_agree"
										  onChange={() => setLicenceAgree(!liceneAgree)}/>
										  <label className="custom-control-label" htmlFor="customCheck_agree">Agree to our Terms, Privacy Policy, and End user license agreement</label>
										</div>
                                    </div>
										<div className="custom-control mb-2 custom-checkbox">
										  <input type="checkbox" className="custom-control-input" id="customCheck_receiving"/>
										  <label className="custom-control-label" htmlFor="customCheck_receiving">I agree to receiving communications</label>
										</div>
									<div className="form-group col-12">
										<button type="submit" 
										//  disabled={(formIsValid) ? true : false} 
										className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>

										<p>The information you provide on this form will be retained and handled by TheMode in accordance with our Privacy Policy.</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
        </Layout>
    )
}
export default SignUp