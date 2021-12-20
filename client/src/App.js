import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import ApplicationForm from './Components/ApplicationForm';
import StatusForm from './Components/StatusForm';
import Login from './Components/Login';
import Passes from './Components/Outpass';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path = "/ApplicationForm" element={<ApplicationForm/>}/>
      <Route exact path = "/StatusForm" element={<StatusForm/>}/>
      <Route exact path = "/Passes" element={<Passes/>}/>
      <Route exact path = "/Login" element={<Login/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
