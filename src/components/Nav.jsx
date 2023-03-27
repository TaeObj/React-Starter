import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white">
        <div className="container">
          <Link to={""} className="navbar-brand fw-bold">
            React Starter
          </Link>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto">
              <Link to={""} className="nav-link">
                Home
              </Link>
              <Link to={"about"} className="nav-link">
                About
              </Link>
              <Link to={"Portfolio"} className="nav-link">
                Portfolio
              </Link>
              <Link to={"contact"} className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
