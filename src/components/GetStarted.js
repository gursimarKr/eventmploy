import React from 'react';
import getStarted from '../assets/images/getstarted.png';
import getStartedMob from '../assets/images/getstarted-mob.png';
import Header from './snippet/Header';
import Footer from './snippet/Footer';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return(
        <>
        <Header/>
		<main className="page-access">
			<div className="page-image" style={{backgroundImage: `url(${getStarted})`}}>
				<img src={getStartedMob} className="w-100 d-block d-md-none" alt="image" />
			</div>
			<div className="container container-xxl">
				<div className="row no-gutters">
					<div className="col-lg-5">
						<h1><span>Sign-up</span> & get started today</h1>
						<p>If you are looking to reduce the time and effort you spend finding freelancers or event gigs then sign-up today, and relax.</p>
						<Link to="/event-organizer-plan" className="btn mb-3 py-0 btn-block text-left btn-lg btn-white">I am <strong>looking</strong> for event professionals</Link>
						<Link to="/membership-plan" className="btn mb-3 py-0 btn-block text-left btn-lg btn-white"><strong>I am</strong> an event freelancer</Link>
					</div>
				</div>
			</div>
		</main>

        <Footer/>
        </>
    )
}
export default GetStarted