import { Route, Switch } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import Landing from '../pages/LandingPage';
import Profile from '../pages/Dashboard/ProfilePage';
import StudentForm from '../pages/FormPages/StudentForm';
import CoachForm from '../pages/FormPages/CoachForm';
import Routines from '../pages/Dashboard/CoachDash/RoutinesBoard';
import Pupils from '../pages/Dashboard/CoachDash/PupilsBoard';
import Exercises from '../pages/Dashboard/CoachDash/WorkoutBoard';
import Explore from '../pages/Dashboard/StudentDash/Explore';
// ---------- components ------------ //
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import routes from './Helpers';

const Blog = () => {
  return <h1>Blog</h1>
}
const Chat = () => {
  return <h1>Chat</h1>
}
const Report = () => {
  return <h1>Report</h1>
}
const Calendar = () => {
  return <h1>Calendar</h1>
}
const Gallery = () => {
  return <h1>Gallery</h1>
}
const NotFoundPage = () => {
  return <h1>Error 404</h1>
}



function AppRouter() {

  return (
    <>
      <Switch>
        <PrivateRoute path={routes.routines} component={Routines} />
        <PrivateRoute path={routes.exercises} component={Exercises} />
        <PrivateRoute path={routes.pupils} component={Pupils} />
        <PrivateRoute path={routes.blog} component={Blog} />
        <PrivateRoute path={routes.chat} component={Chat} />
        <PrivateRoute path={routes.report} component={Report} />
        <PrivateRoute path={routes.calendar} component={Calendar} />
        <PrivateRoute path={routes.gallery} component={Gallery} />
        <PrivateRoute path={routes.profile} component={Profile} />
        <PrivateRoute path={routes.explore} component={Explore} />

        <PublicRoute path={routes.login} component={Login} />
        <Route path={routes.studentForm} component={StudentForm} />
        <Route path={routes.coachForm} component={CoachForm} />
        <Route path={routes.signup()} component={Signup} />
        <PublicRoute path={routes.landing} component={Landing} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
