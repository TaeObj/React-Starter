import React from "react";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="d-flex align-items-center justify-content-center text-center h-100vh py-5"
      >
        <div className="container">
          <h1>Portfolio</h1>
          <div className="fs-1 text-center">
            <i class="fa-solid fa-grip-lines"></i>
            <i className="fa fa-star mx-4"></i>
            <i class="fa-solid fa-grip-lines"></i>
          </div>
          <div className="fs-3 mt-5">
            <div className="row gy-4">
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-01.png" alt="lorem ipsum" />
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-02.png" alt="lorem ipsum" />
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-03.png" alt="lorem ipsum" />
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-04.png" alt="lorem ipsum" />
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-05.png" alt="lorem ipsum" />
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper bg-white bg-opacity-50 rounded">
                  <img src="./port-06.png" alt="lorem ipsum" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
