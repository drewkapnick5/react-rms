import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/auctions" exact>
                  Auctions
                </NavLink>
              </li>
              <li>
                <NavLink to="/results" exact>
                  Results
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bid" exact>
                    Register to bid
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>1 Classic Car Drive</li>
                <li>Blenheim, Ontario</li>
                <li>Canada</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+ 1 519 352 4575</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
