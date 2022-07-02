import React from 'react';
import logo250 from '../vendor/image/logo-250.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                  <img src={logo250} className="img-fluid" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <NavLink className="nav-link active btn" aria-current="page" to="/">Home</NavLink>
                  <NavLink className="nav-link btn" to="/contact">Contact me</NavLink>
                </div>
              </div>
            </div>
          </nav>
    </header> 
    </>
  )
}

export default Header;
