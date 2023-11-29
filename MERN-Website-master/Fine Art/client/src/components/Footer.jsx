import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>FINE ART</h4>
              </div>

              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      Features
                    </NavLink>
                  </li>
               
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      Features
                    </NavLink>
                  </li>
                  
                  
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
              </div>
            </div>

            
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
