import React, { useState } from 'react';
import signup from '../assets/images/signup.png';
import signupMob from '../assets/images/signup-mob.png';
import Footer from './snippet/Footer';
import Layout from '../global/PrimaryLayout';
import {
    Link
  } from "react-router-dom";
const Login = () => {
	const [fields, setFields] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(true);
	//const [redirect, setRedirect] = useState(false);
	
	const handleChange = event => {
        fields[event.target.name] = event.target.value;
		setFields(fields);
		//console.log(fields);
	}
	const handleSubmit = event => {
		event.preventDefault();
		let errors = {};
		if(!fields['email']){
			setIsValid(false);
			errors['email']= "*Please enter your email address";
		}
		if(typeof fields['email'] !== 'undefined'){
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if(!pattern.test(fields['email'])){
				setIsValid(false);
				errors['email']="*Please enter valid email address";
			}
			if (!fields["password"]) {
				setIsValid(false);
				errors["password"] = "*Please enter your Password.";
			}
			setErrors({...errors});
			//console.log(errors,fields);
			return isValid;
		}
	}
    return(
        <Layout>
		<main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${signup})`}}>
				<img src={signupMob} className="w-100 d-block d-md-none" alt="banner" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1>Let’s get you <span>logged-in</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt molestie libero non vestibulum.</p>
						
						<div className="form-area pt-md-3 pt-2">
							<form onSubmit = {event => handleSubmit(event)}>
								<div className="form-row">
									<div className="form-group col-12">
										<div className="form-field">
											<label>Email</label>
											<input 
											onChange={event=>handleChange(event)}
											type="text" 
											className="form-control" 
											placeholder="Nicola@alkye.com" 
											name="email"
											/>
										</div>
										<div className="">{!(fields.email)? errors.email: null}</div>

									</div>
									<div className="form-group col-12">
										<div className="form-field">
											<label>Password</label>
											<input 
											onChange={event=>handleChange(event)}
											type="password" 
											className="form-control" 
											placeholder="Password" 
											name="password"
											/>
										</div>
										<div className="">{!(fields.password)? errors.password: null}</div>
									</div>
									<div className="form-group col-12">
										<Link to="/forgot-password" className="btn-link text-primary">Forgot password?</Link>
									</div>
									<div className="form-group col-12">
										{/* <Link to="/dashboard"> */}
											<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
											{/* </Link> */}

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
        </Layout>
    )
}
export default Login