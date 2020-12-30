import React from 'react';
import DashboardHeader from './snippet/DashboardHeader';

const MakeRating = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>Leave a <span>rating</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-6 mb-4">
						<div className="chat-contact rating-box position-relative w-100 d-flex">
							<span className="contact-auth">eb</span>
							<div className="contact-name">
								<strong className="text-truncate w-100">Elise Beverley</strong>
								Please rate out of 5 stars 

								<div className="rating_stars mt-2 rating_stars_2x text-primary">
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
								</div> 
							</div>
							<div className="contact-review mt-md-0 mt-auto text-center">
								<p>2/12/2020</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mb-4">
						<div className="chat-contact rating-box position-relative w-100 d-flex">
							<span className="contact-auth">ah</span>
							<div className="contact-name">
								<strong className="text-truncate w-100">Antonin Hafer</strong>
								Please rate out of 5 stars 

								<div className="rating_stars mt-2 rating_stars_2x text-primary">
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
								</div> 
							</div>
							<div className="contact-review mt-md-0 mt-auto text-center">
								<p>2/12/2020</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mb-4">
						<div className="chat-contact rating-box position-relative w-100 d-flex">
							<span className="contact-auth">ab</span>
							<div className="contact-name">
								<strong className="text-truncate w-100">Ariana Barros</strong>
								Please rate out of 5 stars 

								<div className="rating_stars mt-2 rating_stars_2x text-primary">
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
								</div> 
							</div>
							<div className="contact-review mt-md-0 mt-auto text-center">
								<p>2/12/2020</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 mb-4">
						<div className="chat-contact rating-box position-relative w-100 d-flex">
							<span className="contact-auth">cr</span>
							<div className="contact-name">
								<strong className="text-truncate w-100">Cameron Rogers</strong>
								Please rate out of 5 stars 

								<div className="rating_stars mt-2 rating_stars_2x text-primary">
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
								</div> 
							</div>
							<div className="contact-review mt-md-0 mt-auto text-center">
								<p>2/12/2020</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default MakeRating