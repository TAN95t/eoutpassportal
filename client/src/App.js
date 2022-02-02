import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import ApplicationForm from './Components/ApplicationForm';
import StatusForm from './Components/StatusForm';
import Login from './Components/Login';
import Passes from './Components/Passes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "70px" }}>
          <Routes>
            <Route path="/">
              <Route path="ApplicationForm" element={<ApplicationForm />} />
              <Route path="StatusForm" element={<StatusForm />} />
              <Route path="Passes" element={<Passes />} />
              <Route path="Login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
