import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EventOrganizerPlan from "./components/EventOrganizerPlan";
import PostAJob from './components/PostAJob';
import CurrentJobs from './components/CurrentJobs';
import PreviousJobs from './components/PreviousJobs';
import MyRating from './components/MyRating';
import Calendar from './components/Calendar';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Conversations from './components/Conversations';
import ProfileChangePassword from './components/ProfileChangePassword';
import MakeRating from './components/MakeRating';
import GetStarted from './components/GetStarted';
import MembershipPlan from './components/MembershipPlan';
import ForgotPassword from './components/ForgotPassword';
import FewMoreDetails from './components/FewMoreDetails';
import JobsRequestedFreelancer from './components/Freelancer/JobsRequestedFreelancer';
import MembershipPlanFreelancer from "./components/Freelancer/MembershipPlanFreelancer";
import Payment from "./components/Payment";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
        <Switch>  
          <Route path="/" exact component={Homepage}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/post" component={PostAJob}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/jobs" component={JobsRequestedFreelancer}/>
          <Route path="/notification" component={Notifications}/>
          <Route path="/conversation" component={Conversations}/>
          <Route path="/my-ratings" component={MyRating}/>
          <Route path="/get-started" component={GetStarted}/>
          <Route path="/membership-plan" component={MembershipPlan}/>
          <Route path="/event-organizer-plan" component={EventOrganizerPlan}/>
          <Route path="/make-rating" component={MakeRating}/>
          <Route path="/previous-jobs" component={PreviousJobs}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/plans" component={MembershipPlan}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/change-password" component={ProfileChangePassword}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/personal-information" component={FewMoreDetails}/>
          <Route path="/current-jobs" component={CurrentJobs}/>
          
          <Route path="/event-organizer-plan" component={EventOrganizerPlan}/>
        </Switch>
    </Router>
  );
}

export default App;
