import React from 'react';

const ProfileChangePassword = () => {
    return(
        <>
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
								<label for="pic_upload" className="pic_upload position-absolute p-0 btn btn-primary"><i className="fas fa-upload"></i></label>
								<div className="contact-auth">nb</div>
							</div>

							<strong>Nicola Bond</strong>
							 <span>Title for Organizer</span>
						</div>

						<div className="list-group">
						  <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-user"></i> Personal Information</a>
						  <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-lock"></i> Change Password</a>
						</div>
					</div>
					<div className="col-lg-12 col-md-8 col-xl-8">
						<div className="profile-box">
							<div className="d-flex flex-nowrap mb-3">
								<div className="d-auto">
									<h3>Change Password</h3>
									<p>Upgrade your password</p>
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
												<label>Enter Old Password</label>
												<input type="password" className="form-control" value="Enter Old Password" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Enter New Password</label>
												<input type="password" className="form-control" value="Enter New Password" />
											</div>
										</div>
										<div className="form-group mb-md-4 mb-3 col-sm-6">
											<div className="form-field">
												<label>Confirm New Password</label>
												<input type="password" className="form-control" value="Confirm New Password" />
											</div>
										</div>
										<div className="w-100 mb-sm-5"></div>
										<div className="form-group mb-md-0 mb-3 col-sm-6 ml-auto">
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
export default ProfileChangePassword