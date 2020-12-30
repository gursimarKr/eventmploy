import React from 'react';
import DashboardHeader from '../snippet/DashboardHeader';

const ProfileCompleteFreelancer = () => {
    return(
        <>
        <DashboardHeader/>
        
		<main class="page-dashboard">
			<div class="container-fluid">
				<div class="row page-info mb-4">
					<div class="col-lg-10 col-xl-7">
						<h1>My <span>profile</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-5 mb-4 col-md-4 col-xl-3">
						<div class="profile-card d-flex flex-column align-items-center text-center">
							<div class="position-relative">
								<input type="file" id="pic_upload" hidden />
								<label for="pic_upload" class="pic_upload position-absolute p-0 btn btn-primary"><i class="fas fa-upload"></i></label>
								<div class="contact-auth">nb</div>
							</div>

							<strong>Aneesh Bond</strong>
							 <span>Title for Freelancer</span>
						</div>

						<div class="list-group">
						  <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-file-alt"></i> Personal Information</a>
						  <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-lock"></i> Change Password</a>
						  <a href="#" class="list-group-item active list-group-item-action"><i class="fas fa-user"></i> Complete Profile</a>
						</div>
					</div>
					<div class="col-lg-12 col-md-8 col-xl-8">
						<div class="profile-box">
							<div class="d-flex flex-nowrap mb-3">
								<div class="d-auto">
									<h3>Complete Profile</h3>
									<p>Fill your full information here</p>
								</div>
								<div class="d-auto ml-auto">
									<button type="button" class="btn btn-link p-0 text-primary btn-edit"><i class="fas fa-pen"></i> Edit Profile</button>
								</div>
							</div>

							<div class="form-area">
								<form action="/">
									<div class="row">
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Start Date</label>
												<input type="text" class="form-control" value="22/12/2020" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>End Date</label>
												<input type="text" class="form-control" value="30/12/2020" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Accepted Minimum Rate</label>
												<input type="text" class="form-control" value="$ 2,000" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field pb-0">
												<label class="mb-1">Rate Type</label>
												<select class="form-control border-0">
													<option value="0">Weekly</option>
												</select>
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Experience (in years)</label>
												<input type="text" class="form-control" value="5" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Preferred Work Location</label>
												<input type="text" class="form-control" value="Australia" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Work range (in km)</label>
												<input type="text" class="form-control" value="30" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>ABN</label>
												<input type="text" class="form-control" value="0444 441 465" />
											</div>
										</div>
										<div class="form-group col-12">
											<h4 class="mb-0">Work Requirements</h4>
										</div>
										<div class="form-group form-group-switch mb-1 col-sm-6 col-md-4">
											<label>Right to work in Australia</label>
											<div class="form-switch text-uppercase">
												<input type="checkbox" id="formSwitch1" hidden />
												<label for="formSwitch1" class="d-flex align-items-center justify-content-between">
													<span class="fs-no">No</span>
													<span class="fs-yes">Yes</span>
												</label>
											</div>
										</div>
										<div class="form-group form-group-switch mb-1 col-sm-6 col-md-4">
											<label>Working with children check</label>
											<div class="form-switch text-uppercase">
												<input type="checkbox" id="formSwitch2" hidden checked />
												<label for="formSwitch2" class="d-flex align-items-center justify-content-between">
													<span class="fs-no">No</span>
													<span class="fs-yes">Yes</span>
												</label>
											</div>
										</div>
										<div class="form-group form-group-switch mb-1 col-sm-6 col-md-4">
											<label>Australian Driving License</label>
											<div class="form-switch text-uppercase">
												<input type="checkbox" id="formSwitch3" hidden checked />
												<label for="formSwitch3" class="d-flex align-items-center justify-content-between">
													<span class="fs-no">No</span>
													<span class="fs-yes">Yes</span>
												</label>
											</div>
										</div>
										<div class="form-group form-group-switch mb-1 col-sm-6 col-md-4">
											<label>Current Police Check</label>
											<div class="form-switch text-uppercase">
												<input type="checkbox" id="formSwitch4" hidden />
												<label for="formSwitch4" class="d-flex align-items-center justify-content-between">
													<span class="fs-no">No</span>
													<span class="fs-yes">Yes</span>
												</label>
											</div>
										</div>
										<div class="form-group form-group-switch mb-1 col-sm-6 col-md-4">
											<label>Australian Business Number (ABN)</label>
											<div class="form-switch text-uppercase">
												<input type="checkbox" id="formSwitch5" hidden />
												<label for="formSwitch5" class="d-flex align-items-center justify-content-between">
													<span class="fs-no">No</span>
													<span class="fs-yes">Yes</span>
												</label>
											</div>
										</div>

										<div class="form-group mb-md-4 mb-3 mt-3 col-sm-12">
											<div class="form-field form-field-pills">
												<label>License/Qualification</label>
												<div class="w-100">
													<span class="skill-pill">Chief Warden <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
													<span class="skill-pill">Forklift <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
													<span class="skill-pill">Safety Accreditation <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
												</div>
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-12">
											<div class="form-field">
												<label>Biography</label>
												<textarea class="form-control" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan nibh ut velit vehicula, sit amet imperdiet velit laoreet. Pellentesque venenatis dictum odio. Duis posuere purus lacus, posuere aliquet dolor vulputate at. Duis nunc ex, pulvinar vel bibendum vel, porta vel arcu. Morbi velit enim, iaculis et interdum eu, pulvinar id nulla. Proin id turpis neque. Mauris eu lorem tempor, pharetra nibh sit amet, consectetur nisi.</textarea>
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-12">
											<div class="form-field d-flex align-items-center">
												<div class="mr-auto">
													<label>Upload New CV</label>
													<input type="text" class="form-control" value="Aneesh-CV.docx" readonly />
												</div>
												<div>
													<input type="file" id="cvUpload" hidden />
													<label for="cvUpload" class="upload_cv text-secondary m-0"><i class="fas mr-2 fa-upload"></i> <span class="d-sm-inline-block d-none">Upload File</span></label>
												</div>
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-12">
											<div class="form-field form-field-pills">
												<label>Skills</label>
												<div class="w-100">
													<span class="skill-pill">Store Manager <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
													<span class="skill-pill">Production Manager <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
													<span class="skill-pill">Ticket Seller <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
													<span class="skill-pill">Merchandise Seller <button class="btn p-0"><img src="images/delete.png" alt="icon" /></button></span>
												</div>
											</div>
										</div>
										<div class="form-group mt-md-4 mb-md-0 mb-3 col-sm-6 ml-auto">
											<button class="btn btn-primary btn-block btn-lg mb-3 rounded-0 px-4 d-flex align-items-center">Save <i class="fas ml-auto fa-arrow-right"></i></button>
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