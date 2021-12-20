import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">E-OutPass</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/ApplicationForm">Application</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/StatusForm">Status</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Passes">Passes</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/Login" role="button" className="btn btn-outline-success mx-2" type="submit">Login</Link>
              <Link to="/Home" role="button" className="btn btn-outline-danger" type="submit">Logout</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
