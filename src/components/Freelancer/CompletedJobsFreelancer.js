import React from 'react';
import { Link } from 'react-router-dom';
//import Layout from '../../global/PrimaryLayout';
import DashboardHeader from '../snippet/DashboardHeader';
const CompletedJobsFreelancer = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-md-5 mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1><span>Completed</span> Jobs</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 mb-md-5 mb-4">
						<div className="post-card mb-xl-4">
							<div className="pc-status status-active">Complete</div>
							<p><span className="d-none d-md-inline-block">Posted on : </span>21st Nov 2020</p>
							<h2><Link to="/">Awesome School Party</Link></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
							<div className="pc-info d-none d-md-block"><i className="fas fa-map-pin"></i> Sydney NSW, AU</div>
							<div className="pc-info d-block d-md-none"><i className="fas fa-map-marker-alt"></i> Sydney NSW, AU</div>
							<div className="pc-info"><i className="far fa-calendar-alt"></i> 25th Nov 2020 - 30th Nov 2020</div>
							<div className="pc-info"><i className="fas fa-dollar-sign"></i> $2,000</div>
							<div className="pc-info"><i className="fas fa-users"></i> 5 Applicants</div>
							<div className="pc-tags">
								<div className="pc-tag">Site Manager</div>
								<div className="pc-tag">Warden</div>
								<div className="pc-tag">Technician</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 mb-md-5 mb-4">
						<div className="post-card mb-xl-4">
							<div className="pc-status status-active">Complete</div>
							<p><span className="d-none d-md-inline-block">Posted on : </span>21st Nov 2020</p>
							<h2><Link to="/">Awesome School Party</Link></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
							<div className="pc-info"><i className="fas fa-map-pin"></i> Sydney NSW, AU</div>
							<div className="pc-info"><i className="far fa-calendar-alt"></i> 25th Nov 2020 - 30th Nov 2020</div>
							<div className="pc-info"><i className="fas fa-dollar-sign"></i> $2,000</div>
							<div className="pc-info"><i className="fas fa-users"></i> 5 Applicants</div>
							<div className="pc-tags">
								<div className="pc-tag">Site Manager</div>
								<div className="pc-tag">Warden</div>
								<div className="pc-tag">Technician</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default CompletedJobsFreelancer