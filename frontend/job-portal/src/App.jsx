import{
  browserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {Toster} from 'react-hot-toast';

const App = () => {
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<landingpage/>} />
          <Route path='/signup' element={<signup/>}
        </Routes>
      </Router>
    </div>
  )
}
export default App
