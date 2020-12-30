import React from 'react';
import DashboardHeader from '../snippet/DashboardHeader';

const ProfileChangeFreelancer = () => {
    return (
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
						  <a href="#" class="list-group-item active list-group-item-action"><i class="fas fa-lock"></i> Change Password</a>
						  <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-user"></i> Complete Profile</a>
						</div>
					</div>
					<div class="col-lg-12 col-md-8 col-xl-8">
						<div class="profile-box">
							<div class="d-flex flex-nowrap mb-3">
								<div class="d-auto">
									<h3>Change Password</h3>
									<p>Upgrade your password</p>
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
												<label>Enter Old Password</label>
												<input type="password" class="form-control" value="Enter Old Password" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Enter New Password</label>
												<input type="password" class="form-control" value="Enter New Password" />
											</div>
										</div>
										<div class="form-group mb-md-4 mb-3 col-sm-6">
											<div class="form-field">
												<label>Confirm New Password</label>
												<input type="password" class="form-control" value="Confirm New Password" />
											</div>
										</div>
										<div class="w-100 mb-sm-5"></div>
										<div class="form-group mb-md-0 mb-3 col-sm-6 ml-auto">
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
export default ProfileChangeFreelancer