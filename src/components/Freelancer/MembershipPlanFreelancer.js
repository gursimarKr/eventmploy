import React from 'react';
import dots from '../../assets/images/dots.png';
import userIcon from '../../assets/images/user-icon.png';
import monthly from '../../assets/images/monthly.png';

const MembershipPlanFreelancer = () => {
    return(
        <>
        
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-100">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>plan</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-5 col-lg-6 col-xl-auto mr-xl-3 col-sm-6 mb-4">
						<div className="member-card">
							<img src={dots} className="card-dots" alt="dots" />
							<div className="member-plan"><img src={userIcon} alt="icon"/></div>
							<h2>Introductory offer</h2>
							<p>Sign up now and get your first month for free. You will then join our paid subsciprion plan</p>

							<div className="member-price">
								<strong>$0.00</strong>
								For first month
							</div>

							<button className="btn btn-block rounded-4 btn-md btn-primary">BUY PLAN</button>
						</div>
					</div>
					<div className="col-md-5 col-lg-6 col-xl-auto mr-xl-3 col-sm-6 mb-4">
						<div className="member-card">
							<img src={dots} className="card-dots" alt="dots" />
							<div className="member-plan"><img src={monthly} alt="icon"/></div>
							<h2>Month by Month</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ligula vitae lorem semper molestie nec ac velit. Aliquam erat volutpat. </p>

							<div className="member-price">
								<strong>$99.99</strong>
								Per year
							</div>

							<button className="btn btn-block rounded-4 btn-md btn-primary">BUY PLAN</button>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default MembershipPlanFreelancer