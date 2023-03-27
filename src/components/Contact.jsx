import React from "react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="d-flex align-items-center justify-content-center text-center py-5"
      >
        <div className="container">
          <h1>Contact</h1>
          <div className="fs-1 text-center">
            <i class="fa-solid fa-grip-lines"></i>
            <i className="fa fa-star mx-4"></i>
            <i class="fa-solid fa-grip-lines"></i>
          </div>
          <div className="fs-3 mt-5">
            <div className="row gy-4">
              <div className="col-3"></div>
              <div className="col-6">
                <form action="">
                  <div className="form-group mb-3">
                    <input className="form-control" type="text" placeholder="Name" />
                  </div>
                  <div className="form-group mb-3">
                    <input className="form-control" type="email" placeholder="Email" />
                  </div>
                  <div className="form-group mb-3">
                    <input className="form-control" type="tel" placeholder="Phone" />
                  </div>
                  <div className="form-group mb-3">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <button className="btn btn-info text-white">SEND</button>
                  </div>
                </form>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
