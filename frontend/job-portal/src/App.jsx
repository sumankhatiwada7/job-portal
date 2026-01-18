import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/landingpage/landingpage';
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';
import JSDashboard from './pages/joobsekeer/jsdashboard';
import UserProfile from './pages/joobsekeer/userprofile';
import SavedJobs from './pages/joobsekeer/savedjobs';
import JobDetails from './pages/joobsekeer/jobdetails';
import EDashboard from './pages/employeer/edashbboard';
import JobPosting from './pages/employeer/jobposting';
import ApplicationViewer from './pages/employeer/applicationviewer';
import EProfilePage from './pages/employeer/eprofilepage';
import EditProfileEmployee from './pages/employeer/editprofilee';
import ManageJobs from './pages/employeer/managejobs';
import ProtectedRoute from './routes/protectedroute';

const App = () => {
  return (
    
    <div>
      <Router>
        <Routes>
          {/*public routes*/}
          {/*route of landingpage,login,signup*/}
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          {/*route of joobseeker*/}
          <Route path='/find-jobs'element={<JSDashboard/>}/>
          <Route path='/user-profile'element={<UserProfile/>}/>
          <Route path='/saved-jobs' element={<SavedJobs/>}/>
          <Route path='/job-details/:id' element={<JobDetails/>}/>
          {/* private routes*/}
          {/*route of employer*/}
          <Route element={<ProtectedRoute    requiredRole="employer"/>}>
            <Route path='/employer-dashboard' element={<EDashboard/>}/>
            <Route path='/post-job' element={<JobPosting/>}/>
            <Route path='/applicants' element={<ApplicationViewer/>}/>
            <Route path='/employer-profile' element={<EProfilePage/>}/>
            <Route path='/editprofileemployer' element={<EditProfileEmployee/>}/>
            <Route path='/manage-jobs' element={<ManageJobs/>}/>

          </Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
   
    </div>
  )
}
export default App
