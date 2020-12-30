import React from 'react';
import DashboardHeader from './snippet/DashboardHeader';

const MyRating = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>ratings</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-6 mb-4">
						<div className="chat-contact rating-box position-relative w-100 d-flex align-items-center">
							<span className="contact-auth">eb</span>
							<div className="contact-name">
								<strong className="text-truncate w-100">Elise Beverley</strong>
								Title for Designation 
							</div>
							<div className="contact-review text-center">
								<strong>3.5</strong>
								<div className="rating_stars text-primary">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star-half-alt"></i>
									<i className="far fa-star"></i>
								</div>
								<p>Based on 23 reviews</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default MyRating