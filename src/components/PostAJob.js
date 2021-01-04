import React from 'react';
import DashboardHeader from './snippet/DashboardHeader';
import minus from '../assets/images/minus.png';
import plus from '../assets/images/plus.png';

const PostAJob = () => {
	const handleChange = event => {

	}
    return(
        <>
        <DashboardHeader/>
        
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>Post a <span>new job</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12 mb-4 col-md-12 col-xl-3">
						<div className="nav nav-tab-list flex-column nav-pills position-sticky" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					      <a className="nav-link active" id="v-pills-step1-tab" data-toggle="pill" href="#v-pills-step1" role="tab" aria-controls="v-pills-step1" aria-selected="true">Let’s confirm your details</a>
					      <a className="nav-link" id="v-pills-step2-tab" data-toggle="pill" href="#v-pills-step2" role="tab" aria-controls="v-pills-step2" aria-selected="false">A little about the event</a>
					      <a className="nav-link" id="v-pills-step3-tab" data-toggle="pill" href="#v-pills-step3" role="tab" aria-controls="v-pills-step3" aria-selected="false">A little about the person you are looking for</a>
					    </div>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-8">
						<div className="tab-content" id="v-pills-tabContent">
					      <div className="tab-pane fade show active" id="v-pills-step1" role="tabpanel" aria-labelledby="v-pills-step1-tab">
					      	<div className="job-post-box">
								<div className="mb-4">
									<h2>Confirm your <br/>personal details</h2>
								</div>

								<div className="form-area">
									<form action="/">
										<div className="row">
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Full Name</label>
													<input type="text" onChange={event=>handleChange(event)} className="form-control" value="Nicola Bond" />
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Phone number</label>
													<input id="tel-phone" className="form-control" placeholder="0444 441 465" type="tel"/>
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>ABN</label>
													<input type="text" className="form-control" onChange={event=>handleChange(event)} value="123-345-3455" />
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Email Address</label>
													<input type="email" className="form-control" onChange={event=>handleChange(event)} value="test+organiser@test.com" />
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-12">
												<div className="form-field">
													<label>Location</label>
													<input type="email" className="form-control" onChange={event=>handleChange(event)} value="Sydney, AU" />
												</div>
											</div>
											<div className="w-100 mb-sm-5"></div>
											<div className="form-group mb-md-0 mb-3 col-sm-6 ml-auto">
												<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
											</div>
										</div>
									</form>
								</div>
							</div>
					      </div>
					      <div className="tab-pane fade" id="v-pills-step2" role="tabpanel" aria-labelledby="v-pills-step2-tab">
					      	<div className="job-post-box">
								<div className="mb-4">
									<h2>A little about <br />the event</h2>
								</div>

								<div className="form-area">
									<form action="/">
										<div className="row">
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Event Name</label>
													<input type="text" className="form-control" onChange={event=>handleChange(event)} value="Kids Party" />
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Event Dates</label>
													<input type="text" className="form-control" onChange={event=>handleChange(event)} value="02/12/2020 - 08/12/2020" />
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-9">
												<div className="form-field">
													<label>Event Description</label>
													<textarea onChange={event=>handleChange(event)} className="form-control" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan nibh ut velit vehicula, sit amet imperdiet velit laoreet. Pellentesque venenatis dictum odio. Duis posuere purus lacus, posuere aliquet dolor vulputate at. Duis nunc ex, pulvinar vel bibendum vel, porta vel arcu. Morbi velit enim, iaculis et interdum eu, pulvinar id nulla. Proin id turpis neque. Mauris eu lorem tempor, pharetra nibh sit amet, consectetur nisi.</textarea>
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-3">
												<div className="form-field need-help d-flex align-items-center text-center justify-content-center">
													Need help with event description?
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-4">
												<div className="form-field d-flex d-md-block align-items-center justify-content-between flex-wrap">
													<label>Number of Freelancers Required</label>
													<div className="input-group input-group-counter">
													  <div className="input-group-prepend">
													    <button className="btn p-0" type="button"><img src={minus} alt="minus" /></button>
													  </div>
													  <input type="text" className="form-control text-center" onChange={event=>handleChange(event)} value="1" />
													  <div className="input-group-append">
													    <button className="btn p-0" type="button"><img src={plus} alt="plus" /></button>
													  </div>
													</div>
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-8">
												<div className="form-field">
													<label>Pay</label>
													<div className="input-group input-group-pay">
													  <div className="input-group-prepend form-control">
													  	$1,000
													  </div>
													  <select className="form-control">
														<option value="0">Daily</option>
													  </select>
													</div>
												</div>
											</div>
											<div className="form-group mb-md-4 mb-3 col-sm-6">
												<div className="form-field">
													<label>Job Location</label>
													<input type="text" className="form-control" onChange={event=>handleChange(event)} value="Sydney, NSW, AU" />
												</div>
											</div>
											<div className="w-100"></div>
											<div className="form-group mb-1 col-sm-6 order-sm-5">
												<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
											</div>
											<div className="form-group mb-1 col-sm-6">
												<button className="btn btn-dark btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center"><i className="fas mr-auto fa-arrow-left"></i> Previous</button>
											</div>
										</div>
									</form>
								</div>
							</div>
					      </div>
					      <div className="tab-pane fade" id="v-pills-step3" role="tabpanel" aria-labelledby="v-pills-step3-tab">
					      	<div className="job-post-box">
								<div className="mb-4">
									<h2>Who are you <br />looking for?</h2>
								</div>

								<div className="form-area">
									<form action="/">
										<div className="row">
											<div className="col-sm-12">
												<h4>Work Requirements</h4>
											</div>
											<div className="form-group form-group-switch mb-1 col-sm-6 col-md-4">
												<label>Right to work in Australia</label>
												<div className="form-switch text-uppercase">
													<input type="checkbox" id="formSwitch1" hidden />
													<label htmlFor="formSwitch1" className="d-flex align-items-center justify-content-between">
														<span className="fs-no">No</span>
														<span className="fs-yes">Yes</span>
													</label>
												</div>
											</div>
											<div className="form-group form-group-switch mb-1 col-sm-6 col-md-4">
												<label>Working with children check</label>
												<div className="form-switch text-uppercase">
													<input type="checkbox" id="formSwitch2" hidden checked />
													<label htmlFor="formSwitch2" className="d-flex align-items-center justify-content-between">
														<span className="fs-no">No</span>
														<span className="fs-yes">Yes</span>
													</label>
												</div>
											</div>
											<div className="form-group form-group-switch mb-1 col-sm-6 col-md-4">
												<label>Australian Driving License</label>
												<div className="form-switch text-uppercase">
													<input type="checkbox" id="formSwitch3" hidden checked />
													<label htmlFor="formSwitch3" className="d-flex align-items-center justify-content-between">
														<span className="fs-no">No</span>
														<span className="fs-yes">Yes</span>
													</label>
												</div>
											</div>
											<div className="form-group form-group-switch mb-1 col-sm-6 col-md-4">
												<label>Current Police Check</label>
												<div className="form-switch text-uppercase">
													<input type="checkbox" id="formSwitch4" hidden />
													<label htmlFor="formSwitch4" className="d-flex align-items-center justify-content-between">
														<span className="fs-no">No</span>
														<span className="fs-yes">Yes</span>
													</label>
												</div>
											</div>
											<div className="form-group form-group-switch mb-1 col-sm-6 col-md-4">
												<label>Australian Business Number (ABN)</label>
												<div className="form-switch text-uppercase">
													<input type="checkbox" id="formSwitch5" hidden />
													<label htmlFor="formSwitch5" className="d-flex align-items-center justify-content-between">
														<span className="fs-no">No</span>
														<span className="fs-yes">Yes</span>
													</label>
												</div>
											</div>
				
											<div className="col-sm-12 mt-4">
												<div className="section-tabs mb-md-5 mb-2">
													<ul className="nav nav-pills" id="pills-tab" role="tablist">
													  <li className="nav-item" role="presentation">
													    <a className="nav-link active" id="pills-events-tab" data-toggle="pill" href="#pills-events" role="tab" aria-controls="pills-events" aria-selected="true">Events</a>
													  </li>
													  <li className="nav-item" role="presentation">
													    <a className="nav-link" id="pills-hospitality-tab" data-toggle="pill" href="#pills-hospitality" role="tab" aria-controls="pills-hospitality" aria-selected="false">Hospitality</a>
													  </li>
													</ul>
													<div className="tab-content" id="pills-tabContent">
													  <div className="tab-pane fade show active" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
													  	<div className="row">
													  		<div className="col-sm-12 col-md-3">
													  			<h4 className="mb-3">License / Qualifications</h4>
																
																<div className="row custom-control-outer">
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification1"/>
																		  <label className="custom-control-label" htmlFor="checkQualification1">No Certifications Required</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification2"/>
																		  <label className="custom-control-label" htmlFor="checkQualification2">Chief Warden</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification3"/>
																		  <label className="custom-control-label" htmlFor="checkQualification3">Elevated Work Platform</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification4"/>
																		  <label className="custom-control-label" htmlFor="checkQualification4">First Aid</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification5"/>
																		  <label className="custom-control-label" htmlFor="checkQualification5">Forklift</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification6"/>
																		  <label className="custom-control-label" htmlFor="checkQualification6">Safety Accreditation</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification7"/>
																		  <label className="custom-control-label" htmlFor="checkQualification7">Assistant Stage Manager</label>
																		</div>
																	</div>
																</div>
													  		</div>
													  		<div className="col-sm-12 col-md-9">
													  			<h4 className="mb-3">Required Skills</h4>

													  			<div className="row custom-control-outer">
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills1"/>
																		  <label className="custom-control-label" htmlFor="checkSkills1">No Certifications Required</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills2"/>
																		  <label className="custom-control-label" htmlFor="checkSkills2">Chief Warden</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills3"/>
																		  <label className="custom-control-label" htmlFor="checkSkills3">Elevated Work Platform</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills4"/>
																		  <label className="custom-control-label" htmlFor="checkSkills4">Lighting Technician</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills5"/>
																		  <label className="custom-control-label" htmlFor="checkSkills5">General Hand / Site Crew</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills6"/>
																		  <label className="custom-control-label" htmlFor="checkSkills6">Production Assistant</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills7"/>
																		  <label className="custom-control-label" htmlFor="checkSkills7">Merchandise Seller</label>
																		</div>
													  				</div>
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills8"/>
																		  <label className="custom-control-label" htmlFor="checkSkills8">First Aid</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills9"/>
																		  <label className="custom-control-label" htmlFor="checkSkills9">Forklift</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills10"/>
																		  <label className="custom-control-label" htmlFor="checkSkills10">Safety Accreditation</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills11"/>
																		  <label className="custom-control-label" htmlFor="checkSkills11">Site Manager</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills12"/>
																		  <label className="custom-control-label" htmlFor="checkSkills12">Communications Officer</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills13"/>
																		  <label className="custom-control-label" htmlFor="checkSkills13">Production Manager</label>
																		</div>
													  				</div>
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills14"/>
																		  <label className="custom-control-label" htmlFor="checkSkills14">Warden</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills15"/>
																		  <label className="custom-control-label" htmlFor="checkSkills15">Usher</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills16"/>
																		  <label className="custom-control-label" htmlFor="checkSkills16">Ticket Seller</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills17"/>
																		  <label className="custom-control-label" htmlFor="checkSkills17">Sound Technician</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills18"/>
																		  <label className="custom-control-label" htmlFor="checkSkills18">Safety Officer</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills19"/>
																		  <label className="custom-control-label" htmlFor="checkSkills19">Stage Manager</label>
																		</div>
													  				</div>
													  			</div>
													  		</div>
													  	</div>
													  </div>
													  <div className="tab-pane fade" id="pills-hospitality" role="tabpanel" aria-labelledby="pills-hospitality-tab">
													  	<div className="row">
													  		<div className="col-sm-6 col-md-3">
													  			<h4 className="mb-3">License / Qualifications</h4>
																
																<div className="row custom-control-outer">
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification01"/>
																		  <label className="custom-control-label" htmlFor="checkQualification01">No Certifications Required</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification02"/>
																		  <label className="custom-control-label" htmlFor="checkQualification02">Chief Warden</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification03"/>
																		  <label className="custom-control-label" htmlFor="checkQualification03">Elevated Work Platform</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification04"/>
																		  <label className="custom-control-label" htmlFor="checkQualification04">First Aid</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification05"/>
																		  <label className="custom-control-label" htmlFor="checkQualification05">Forklift</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification06"/>
																		  <label className="custom-control-label" htmlFor="checkQualification06">Safety Accreditation</label>
																		</div>
																	</div>
																	<div className="col-6 col-md-12">
															  			<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkQualification07"/>
																		  <label className="custom-control-label" htmlFor="checkQualification07">Assistant Stage Manager</label>
																		</div>
																	</div>
																</div>
													  		</div>
													  		<div className="col-sm-6 col-md-9">
													  			<h4 className="mb-3">Required Skills</h4>

													  			<div className="row custom-control-outer">
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills01"/>
																		  <label className="custom-control-label" htmlFor="checkSkills01">No Certifications Required</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills02"/>
																		  <label className="custom-control-label" htmlFor="checkSkills02">Chief Warden</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills03"/>
																		  <label className="custom-control-label" htmlFor="checkSkills03">Elevated Work Platform</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills04"/>
																		  <label className="custom-control-label" htmlFor="checkSkills04">Lighting Technician</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills05"/>
																		  <label className="custom-control-label" htmlFor="checkSkills05">General Hand / Site Crew</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills06"/>
																		  <label className="custom-control-label" htmlFor="checkSkills06">Production Assistant</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills07"/>
																		  <label className="custom-control-label" htmlFor="checkSkills07">Merchandise Seller</label>
																		</div>
													  				</div>
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills08"/>
																		  <label className="custom-control-label" htmlFor="checkSkills08">First Aid</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills09"/>
																		  <label className="custom-control-label" htmlFor="checkSkills09">Forklift</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills010"/>
																		  <label className="custom-control-label" htmlFor="checkSkills010">Safety Accreditation</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills011"/>
																		  <label className="custom-control-label" htmlFor="checkSkills011">Site Manager</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills012"/>
																		  <label className="custom-control-label" htmlFor="checkSkills012">Communications Officer</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills013"/>
																		  <label className="custom-control-label" htmlFor="checkSkills013">Production Manager</label>
																		</div>
													  				</div>
													  				<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills014"/>
																		  <label className="custom-control-label" htmlFor="checkSkills014">Warden</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills015"/>
																		  <label className="custom-control-label" htmlFor="checkSkills015">Usher</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills016"/>
																		  <label className="custom-control-label" htmlFor="checkSkills016">Ticket Seller</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills017"/>
																		  <label className="custom-control-label" htmlFor="checkSkills017">Sound Technician</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills018"/>
																		  <label className="custom-control-label" htmlFor="checkSkills018">Safety Officer</label>
																		</div>
																	</div>
																	<div className="col-md-4 col-6">
													  					<div className="custom-control mb-2 custom-checkbox">
																		  <input type="checkbox" className="custom-control-input" id="checkSkills019"/>
																		  <label className="custom-control-label" htmlFor="checkSkills019">Stage Manager</label>
																		</div>
													  				</div>
													  			</div>
													  		</div>
													  	</div>
													  </div>
													</div>
												</div>
											</div>

											<div className="w-100"></div>
											<div className="form-group mb-1 col-sm-6 order-sm-5">
												<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Continue <i className="fas ml-auto fa-arrow-right"></i></button>
											</div>
											<div className="form-group mb-1 col-sm-6">
												<button className="btn btn-dark btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center"><i className="fas mr-auto fa-arrow-left"></i> Previous</button>
											</div>
										</div>
									</form>
								</div>
							</div>
					      </div>
					    </div>
					</div>
				</div>
			</div>
		</main>
     </>
    )
}
export default PostAJob