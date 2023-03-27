import React from "react";

function Home() {
  return (
    <>
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center h-100vh py-5"
      >
        <div className="container">
          <h1>START REACT</h1>
          <div className="fs-1 my-5 text-info">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div className="fs-1 text-center">
            <i class="fa-solid fa-grip-lines"></i>
            <i className="fa fa-star mx-4 text-warning"></i>
            <i class="fa-solid fa-grip-lines"></i>
          </div>
          <p className="fs-3 mt-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}

export default Home;
