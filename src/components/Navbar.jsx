import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-5">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src="https://www.edudigm.in/assets/images/inc/avtar-with-pc.png" alt="" width="30" className="d-inline-block align-text-top"/>
      Employee App
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/home'>
                Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/employees'>
                Employees
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
