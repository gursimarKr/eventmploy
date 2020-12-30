import React from 'react';
import DashboardHeader from './snippet/DashboardHeader';
import calendar from '../assets/images/calender.png';
const Calendar = () => {
    return(
        <>
        <DashboardHeader/>
		<main className="page-dashboard">
			<div className="container-fluid">
				<div className="row page-info mb-md-5 mb-4">
					<div className="col-lg-10 col-xl-7">
						<h1>My <span>Calendar</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat neque urna, a vestibulum tellus sollicitudin ut. Vivamus dictum, dolor eget placerat mollis, risus tortor ornare nisi, at interdum urna dui eget urna.</p>
					</div>
				</div>

				<div className="calendar">
					<img src={calendar} className="img-fluid" alt="calendar" />
				</div>
			</div>
		</main>
        </>
    )
}
export default Calendar