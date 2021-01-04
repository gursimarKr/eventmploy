import React from 'react';
import { Link } from 'react-router-dom';
import dots from '../assets/images/dots.png';
import DashboardHeader from './snippet/DashboardHeader';

const Dashboard = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-md-5 mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>Hey Nicola, <br/><span>Welcome</span> Back!</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-10 col-xl-6 col-md-9 admin-subheading">
						<h3>Event professionals in <span className="text-underline">Sydney</span></h3>
						<p>These are some of the professionals in sydney, looking for work. Simply <span>connect, chat and work</span>, with anyone you think would be suitable for the job.</p>
					</div>
				</div>
				<div className="section-hscroll dashboard-hscroll overflow-auto d-sm-flex flex-sm-nowrap">
					<div className="event-card event-gray-card">
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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

				<div className="row mt-5">
					<div className="col-lg-10 col-xl-6 col-md-9 admin-subheading">
						<h3>Recently listed Event professionals in <span className="text-underline">Australia</span></h3>
						<p>These are some of the professionals in sydney, looking for work. Simply <span>connect, chat and work</span>, with anyone you think would be suitable for the job.</p>
					</div>
				</div>
				<div className="section-hscroll dashboard-hscroll overflow-auto d-sm-flex flex-sm-nowrap">
					<div className="event-card event-gray-card">
						<a href="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></a>
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
						<Link to="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></Link>
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
						<Link to="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></Link>
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
						<Link to="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></Link>
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
						<Link to="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></Link>
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
						<Link to="/" className="event-card-chat"><i className="fas fa-comment-dots"></i></Link>
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
			</div>
		</main>
        </>
    )
}
export default Dashboard