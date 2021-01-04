import React from 'react';
import {
    Link
  } from "react-router-dom";
import Headers from './snippet/Header'
import homeBanner from '../assets/images/home-banner.png';
import dots from '../assets/images/dots.png';
import reviewImage from '../assets/images/review-image.png';
import dotsVertical from '../assets/images/dots-vertical.png';
import OwlCarousel from 'react-owl-carousel';  
import Footer from './snippet/Footer';
const Homepage = () => {
    return(
        <>  
            <Headers/>
            <main className="page-content">
			<div className="home-banner text-white d-flex align-items-center" style={{backgroundImage: `url(${homeBanner})`}}>
				<div className="container">
					<div className="row">
						<div className="col-md-11 col-lg-10 pt-md-5">
							<h1><span>EventMploy</span> connecting event organisers with event professionals</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="modalFilter" tabIndex="-1" aria-labelledby="modalFilterLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered">
			    <div className="modal-content">
			      <div className="modal-header border-0">
			        <h5 className="modal-title" id="modalFilterLabel">Filters</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true"><i className="fas fa-times"></i></span>
			        </button>
			      </div>
			      <div className="modal-body pt-0">
			        <div className="filter-inner p-0">
						<form action="/">
							<div className="form-group">
								<div className="input-group">
								  <input type="text" className="form-control" placeholder="site manager" />
								  <div className="input-group-append">
								    <span className="input-group-text pr-1"><i className="fas fa-search"></i></span>
								  </div>
								</div>
							</div>
							<div className="form-group">
								<select className="form-control">
									<option>event professionals</option>
								</select>
							</div>
							<div className="form-group">
								<div className="input-group">
								  <input type="text" className="form-control" placeholder="sydney" />
								  <div className="input-group-append">
								    <span className="input-group-text pr-2"><i className="fas fa-map-pin"></i></span>
								  </div>
								</div>
							</div>
							<button type="submit" className="btn btn-block py-0 btn-primary">Search</button>
						</form>
					</div>
			      </div>
			    </div>
			  </div>
			</div>

			<div className="filter-area">
				<div className="container">
					<button className="float-right btn-primary btn d-block d-md-none btn-filter" data-toggle="modal" data-target="#modalFilter"><i className="fas fa-sliders-h"></i></button>
					<div className="filter-inner d-none d-md-block">
						<form action="/">
							<div className="row">
								<div className="form-group col-md-3 col-lg-4 py-2 py-lg-3 m-0">
									<div className="input-group">
									  <div className="input-group-prepend">
									    <span className="input-group-text"><i className="fas fa-search"></i></span>
									  </div>
									  <input type="text" className="form-control" placeholder="I am looking for …" />
									</div>
								</div>
								<div className="form-group border-left col-md-4 col-lg-3 py-2 py-lg-3 m-0">
									<select className="form-control">
										<option>event professionals</option>
									</select>
								</div>
								<div className="form-group border-left col-md-3 py-2 py-lg-3 m-0">
									<div className="input-group">
									  <div className="input-group-prepend">
									    <span className="input-group-text"><i className="fas fa-map-pin"></i></span>
									  </div>
									  <input type="text" className="form-control" placeholder="anywhere …" />
									</div>
								</div>
								<div className="form-group col-md-2 py-2 py-lg-3 m-0">
									<button type="submit" className="btn btn-block py-0 btn-primary">Search</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="content-area position-relative overflow-hidden">
				<div className="circle-pink position-absolute circle-pink-tr"></div>
				<div className="circle-pink position-absolute circle-pink-ml"></div>
				<div className="container">
					<div className="section-title align-items-center align-items-md-start flex-wrap flex-sm-nowrap d-flex text-secondary justify-content-between">
						<h2><span>Event professionals</span> near you looking for work</h2>
						<a href="/" className="btn btn-link nowrap mt-1 ml-auto mt-lg-2 p-0">start a new search <i className="fas fa-arrow-right ml-2"></i></a>
					</div>

					<div className="section-hscroll overflow-auto d-flex flex-nowrap">
						<div className="event-card event-gray-card">
							<h3>Adam S.</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Lighting Technician</div>
								<div className="ev-tag">Warden</div>
							</div>
							<img src={dots} className="event-dots event-dots-bottom" alt="dots" />
						</div>
						<div className="event-card event-gray-card">
							<h3>Adam S.</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Lighting Technician</div>
								<div className="ev-tag">Warden</div>
							</div>
							<img src={dots} className="event-dots event-dots-bottom" alt="dots" />
						</div>
						<div className="event-card event-gray-card">
							<h3>Adam S.</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Lighting Technician</div>
								<div className="ev-tag">Warden</div>
							</div>
							<img src={dots} className="event-dots event-dots-bottom" alt="dots" />
						</div>
						<div className="event-card event-gray-card">
							<h3>Adam S.</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Lighting Technician</div>
								<div className="ev-tag">Warden</div>
							</div>
							<img src={dots} className="event-dots event-dots-bottom" alt="dots" />
						</div>
					</div>

					<div className="get-started get-started-spacer d-flex flex-column flex-md-row align-items-center">
						<h3>Need an event freelancer?</h3>
						<Link to="/get-started" className="btn btn-secondary d-flex align-items-center btn-get-started btn-shadow">Get Started <i className="fas fa-arrow-right ml-auto"></i></Link>
					</div>


					<div className="section-title mb-4 text-center section-title-md">
						<div className="row justify-content-center">
							<div className="col-sm-10 col-md-6">	
								<h2>How does <span>EventMploy</span> work?</h2>
								<p>Watch the video to see how easily EventMploy can help you find Freelancers and then get straight back to creating your amazing event!</p>							
							</div>
						</div>
					</div>

					<div className="section-tabs">
						<ul className="nav nav-pills" id="pills-tab" role="tablist">
						  <li className="nav-item" role="presentation">
						    <a className="nav-link active" id="pills-organiser-tab" data-toggle="pill" href="/pills-organiser" role="tab" aria-controls="pills-organiser" aria-selected="true">Organiser</a>
						  </li>
						  <li className="nav-item" role="presentation">
						    <a className="nav-link" id="pills-freelancer-tab" data-toggle="pill" href="/pills-freelancer" role="tab" aria-controls="pills-freelancer" aria-selected="false">Freelancer</a>
						  </li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
						  <div className="tab-pane fade show active" id="pills-organiser" role="tabpanel" aria-labelledby="pills-organiser-tab">
						  	<div className="row d-none d-md-flex text-center justify-content-between">
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>1</strong>
						  				<h3>Post your Task</h3>
						  				<p>Post your Job Specify skills required, location, dates and pay rate to find a Freelancer to match</p>
						  			</div>
						  		</div>
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>2</strong>
						  				<h3>Review offers</h3>
						  				<p>Review Freelancers EventMploy will immediately find Freelancers based on your event needs.</p>
						  			</div>
						  		</div>
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>3</strong>
						  				<h3>Get it done</h3>
						  				<p>Make Contact Choose a freelancer and make a job offer! </p>
						  			</div>
						  		</div>
						  	</div>

						  	<div className="owl-carousel text-center d-block d-md-none owl-emwork owl-theme">
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>1</strong>
						  				<h3>Post your Task</h3>
						  				<p>Post your Job Specify skills required, location, dates and pay rate to find a Freelancer to match</p>
						  			</div>
							    </div>
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>2</strong>
						  				<h3>Review offers</h3>
						  				<p>Review Freelancers EventMploy will immediately find Freelancers based on your event needs.</p>
						  			</div>
							    </div>
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>3</strong>
						  				<h3>Get it done</h3>
						  				<p>Make Contact Choose a freelancer and make a job offer! </p>
						  			</div>
							    </div>
							</div>
						  </div>
						  <div className="tab-pane fade" id="pills-freelancer" role="tabpanel" aria-labelledby="pills-freelancer-tab">
						  	<div className="row d-none d-md-flex text-center justify-content-between">
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>1</strong>
						  				<h3>Post your Task</h3>
						  				<p>Post your Job Specify skills required, location, dates and pay rate to find a Freelancer to match</p>
						  			</div>
						  		</div>
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>2</strong>
						  				<h3>Review offers</h3>
						  				<p>Review Freelancers EventMploy will immediately find Freelancers based on your event needs.</p>
						  			</div>
						  		</div>
						  		<div className="col-md-4 col-lg-3 mb-4">
						  			<div className="count-info btn-shadow">
						  				<strong>3</strong>
						  				<h3>Get it done</h3>
						  				<p>Make Contact Choose a freelancer and make a job offer! </p>
						  			</div>
						  		</div>
						  	</div>

						  	<div className="owl-carousel text-center d-block d-md-none owl-emwork owl-theme">
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>1</strong>
						  				<h3>Post your Task</h3>
						  				<p>Post your Job Specify skills required, location, dates and pay rate to find a Freelancer to match</p>
						  			</div>
							    </div>
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>2</strong>
						  				<h3>Review offers</h3>
						  				<p>Review Freelancers EventMploy will immediately find Freelancers based on your event needs.</p>
						  			</div>
							    </div>
							    <div className="item">
							    	<div className="count-info btn-shadow">
						  				<strong>3</strong>
						  				<h3>Get it done</h3>
						  				<p>Make Contact Choose a freelancer and make a job offer! </p>
						  			</div>
							    </div>
							</div>
						  </div>
						</div>
					</div>


					<div className="section-testimonial">
						<div className="row align-items-center">
							<div className="col-lg-4 mb-lg-0 mb-sm-4 mb-3">
								<div className="section-title text-secondary">
									<h2>What others say about us</h2>
								</div>
							</div>
							<div className="col-lg-8">
                            
								<div className="testimonial_outer">
                                    <OwlCarousel
                                        items = {1} 
                                       	className="owl-theme"  
                                        loop  
                                        margin = {1}
                                       	nav
                                    >
   										 <div className="item">
									    	<div className="testimonial-review d-md-flex align-items-center">
												<img src={reviewImage} className="testimonial-review-pic" alt="imag" />
												<div className="testimonial-review-text">
													<h3>James & Emma</h3>
													<p>EventMploy Helped Me Find Some Great Work At The RMIT Graduation Ceremony.</p>
													<div className="signature">James & Emma</div>
												</div>
											</div>
									    </div>
									    <div className="item">
									    	<div className="testimonial-review d-md-flex align-items-center">
												<img src={reviewImage} className="testimonial-review-pic" alt="imag" />
												<div className="testimonial-review-text">
													<h3>James & Emma</h3>
													<p>EventMploy Helped Me Find Some Great Work At The RMIT Graduation Ceremony.</p>
													<div className="signature">James & Emma</div>
												</div>
											</div>
									    </div>
									    <div className="item">
									    	<div className="testimonial-review d-md-flex align-items-center">
												<img src={reviewImage} className="testimonial-review-pic" alt="imag" />
												<div className="testimonial-review-text">
													<h3>James & Emma</h3>
													<p>EventMploy Helped Me Find Some Great Work At The RMIT Graduation Ceremony.</p>
													<div className="signature">James & Emma</div>
												</div>
											</div>
									    </div>
									    <div className="item">
									    	<div className="testimonial-review d-md-flex align-items-center">
												<img src={reviewImage} className="testimonial-review-pic" alt="imag" />
												<div className="testimonial-review-text">
													<h3>James & Emma</h3>
													<p>EventMploy Helped Me Find Some Great Work At The RMIT Graduation Ceremony.</p>
													<div className="signature">James & Emma</div>
												</div>
											</div>
									    </div>
									</OwlCarousel>
								</div>
							</div>
						</div>
					</div>


					<div className="section-title d-flex flex-wrap text-secondary justify-content-between">
						<h2><span>Event gigs</span> near you</h2>
						<a href="/" className="btn btn-link ml-auto mt-1 mt-lg-2 p-0">start a new search <i className="fas fa-arrow-right ml-2"></i></a>
					</div>
					<div className="section-hscroll overflow-auto d-flex flex-nowrap">
						<div className="event-card event-blue-card">
							<h3>Awesome School Party</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney NSW, AU</p>
							<p><i className="far fa-calendar-alt mr-2"></i> 25th Nov 2020 - 30th Nov 2020</p>
							<p><i className="fas fa-dollar-sign mr-2"></i> $2,000</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Warden</div>
								<div className="ev-tag">Technician</div>
							</div>
							<img src={dotsVertical} className="event-dots event-dots-top" alt="dots" />
						</div>
						<div className="event-card event-blue-card">
							<h3>Awesome School Party</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney NSW, AU</p>
							<p><i className="far fa-calendar-alt mr-2"></i> 25th Nov 2020 - 30th Nov 2020</p>
							<p><i className="fas fa-dollar-sign mr-2"></i> $2,000</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Warden</div>
								<div className="ev-tag">Technician</div>
							</div>
							<img src={dotsVertical} className="event-dots event-dots-top" alt="dots" />
						</div>
						<div className="event-card event-blue-card">
							<h3>Awesome School Party</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney NSW, AU</p>
							<p><i className="far fa-calendar-alt mr-2"></i> 25th Nov 2020 - 30th Nov 2020</p>
							<p><i className="fas fa-dollar-sign mr-2"></i> $2,000</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Warden</div>
								<div className="ev-tag">Technician</div>
							</div>
							<img src={dotsVertical} className="event-dots event-dots-top" alt="dots" />
						</div>
						<div className="event-card event-blue-card">
							<h3>Awesome School Party</h3>
							<p><i className="fas fa-map-pin mr-2"></i> Sydney NSW, AU</p>
							<p><i className="far fa-calendar-alt mr-2"></i> 25th Nov 2020 - 30th Nov 2020</p>
							<p><i className="fas fa-dollar-sign mr-2"></i> $2,000</p>
							<div className="event-tags">
								<div className="ev-tag">Site Manager</div>
								<div className="ev-tag">Warden</div>
								<div className="ev-tag">Technician</div>
							</div>
							<img src={dotsVertical} className="event-dots event-dots-top" alt="dots" />
						</div>
					</div>

					<div className="get-started get-started-spacer d-flex flex-column flex-md-row align-items-center">
						<h3>Looking for work?</h3>
						<Link to="/get-started" className="btn btn-secondary d-flex align-items-center btn-get-started btn-shadow">Get Started 
                        <i className="fas fa-arrow-right ml-auto"></i>
                        </Link>
					</div>
				</div>
			</div>
		</main>
       		 <Footer/>    
            
        </>
    )
}
export default Homepage