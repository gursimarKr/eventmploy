import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../snippet/DashboardHeader';
import deletes from '../../assets/images/delete.png';

const ProfileCompleteFreelancer = () => {
    return(
        <>
        <DashboardHeader/>
        
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>profile</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 mb-4 col-md-4 col-xl-3">
						<div className="profile-card d-flex flex-column align-items-center text-center">
							<div className="position-relative">
								<input type="file" id="pic_upload" hidden />
								<label htmlFor="pic_upload" className="pic_upload position-absolute p-0 btn btn-primary"><i className="fas fa-upload"></i></label>
								<div className="contact-auth">nb</div>
							</div>

							<strong>Aneesh Bond</strong>
							 <span>Title for Freelancer</span>
						</div>

						<div className="list-group">
						  <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-file-alt"></i> Personal Information</Link>
						  <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-lock"></i> Change Password</Link>
						  <Link to="/" className="list-group-item active list-group-item-action"><i className="fas fa-user"></i> Complete Profile</Link>
						</div>
					</div>
					<div className="col-lg-12 col-md-8 col-xl-8">
						<div className="profile-box">
							<div className="d-flex flex-nowrap mb-3">
								<div className="d-auto">
									<h3>Complete Profile</h3>
									<p>Fill your full information here</p>
								</div>
								<div className="d-auto ml-auto">
									<button type="button" className="btn btn-link p-0 text-primary btn-edit"><i className="fas fa-pen"></i> Edit Profile</button>
								</div>
							</div>

							<div className="form-area">
								<form action="/">
									<div className="row">
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Start Date</label>
												<input type="text" className="form-control" value="22/12/2020" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>End Date</label>
												<input type="text" className="form-control" value="30/12/2020" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Accepted Minimum Rate</label>
												<input type="text" className="form-control" value="$ 2,000" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field pb-0">
												<label className="mb-1">Rate Type</label>
												<select className="form-control border-0">
													<option value="0">Weekly</option>
												</select>
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Experience (in years)</label>
												<input type="text" className="form-control" value="5" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Preferred Work Location</label>
												<input type="text" className="form-control" value="Australia" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Work range (in km)</label>
												<input type="text" className="form-control" value="30" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>ABN</label>
												<input type="text" className="form-control" value="0444 441 465" />
											</div>
										</div>
										<div className="form-group col-12">
											<h4 className="mb-0">Work Requirements</h4>
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

										<div className="form-group mb-md-4 mb-3 mt-3 col-sm-12">
											<div className="form-field form-field-pills">
												<label>License/Qualification</label>
												<div className="w-100">
													<span className="skill-pill">Chief Warden <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
													<span className="skill-pill">Forklift <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
													<span className="skill-pill">Safety Accreditation <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
												</div>
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-12">
											<div className="form-field">
												<label>Biography</label>
												<textarea className="form-control" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan nibh ut velit vehicula, sit amet imperdiet velit laoreet. Pellentesque venenatis dictum odio. Duis posuere purus lacus, posuere aliquet dolor vulputate at. Duis nunc ex, pulvinar vel bibendum vel, porta vel arcu. Morbi velit enim, iaculis et interdum eu, pulvinar id nulla. Proin id turpis neque. Mauris eu lorem tempor, pharetra nibh sit amet, consectetur nisi.</textarea>
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-12">
											<div className="form-field d-flex align-items-center">
												<div className="mr-auto">
													<label>Upload New CV</label>
													<input type="text" className="form-control" value="Aneesh-CV.docx" readonly />
												</div>
												<div>
													<input type="file" id="cvUpload" hidden />
													<label htmlFor="cvUpload" className="upload_cv text-secondary m-0"><i className="fas mr-2 fa-upload"></i> <span className="d-sm-inline-block d-none">Upload File</span></label>
												</div>
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-12">
											<div className="form-field form-field-pills">
												<label>Skills</label>
												<div className="w-100">
													<span className="skill-pill">Store Manager <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
													<span className="skill-pill">Production Manager <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
													<span className="skill-pill">Ticket Seller <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
													<span className="skill-pill">Merchandise Seller <button className="btn p-0"><img src={deletes} alt="icon" /></button></span>
												</div>
											</div>
										</div>
										<div className="form-group mt-md-4 mb-md-0 mb-3 col-sm-6 ml-auto">
											<button className="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Save <i className="fas ml-auto fa-arrow-right"></i></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default ProfileCompleteFreelancer