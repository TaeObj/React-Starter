import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center">
        <div className="container">
          <div className="row py-5">
            <div className="col-3">
              <h4>Location</h4>
              <p>
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-6">
              <h4>Around the Web</h4>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-2 fs-3">
                  <a href="#!">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="mx-2 fs-3">
                  <a href="#!">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="mx-2 fs-3">
                  <a href="#!">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h4>ABOUT FREELANCER</h4>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
