import React from 'react';
import DashboardHeader from '../snippet/DashboardHeader';

const NotificationFreelancer = () => {
    return(
        <>
        <DashboardHeader/>
        
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>notifications</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
					<div className="col-12 mb-4">
						<div className="notification">
							<p><strong>Elise Beverley</strong> sending you chat request</p>
							<div className="notification-date">A day ago</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}
export default NotificationFreelancer