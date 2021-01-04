import React from 'react';
import { Link } from 'react-router-dom';

const SiteMap = () => {
    return(
        <>
        <Link to="/AcceptedJobsFreelancer">AcceptedJobsFreelancer</Link><br/>
        <Link to="/CompletedJobsFreelancer">CompletedJobsFreelancer</Link><br/>
        <Link to="/DashboardFreelancer">DashboardFreelancer</Link><br/>
        <Link to="/JobsRequestedFreelancer">JobsRequestedFreelancer</Link><br/>
        <Link to="/MembershipPlanFreelancer">MembershipPlanFreelancer</Link><br/>
        <Link to="/NotificationFreelancer">NotificationFreelancer</Link><br/>
        <Link to="/ProfileChangeFreelancer">ProfileChangeFreelancer</Link><br/>
        <Link to="/ProfileCompleteFreelancer">ProfileCompleteFreelancer</Link><br/>
        <Link to="/ProfileFreelancer">ProfileFreelancer</Link><br/>
        </>
    )
}
export default SiteMap