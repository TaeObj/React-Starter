import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="d-flex align-items-center justify-content-center text-center py-5"
      >
        <div className="container">
          <h1>About</h1>
          <div className="fs-1 text-center">
            <i class="fa-solid fa-grip-lines"></i>
            <i className="fa fa-star mx-4"></i>
            <i class="fa-solid fa-grip-lines"></i>
          </div>
          <div className="fs-3 mt-5">
            <div className="row gy-4">
              <div className="col-2"></div>
              <div className="col-4">
                <p className="fs-5 text-start px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur
                  vitae necessitatibus optio aspernatur quia assumenda veniam recusandae sit illo
                  sed fugit inventore quos, modi quas reprehenderit expedita ullam iusto odio
                  obcaecati impedit, omnis tempora deleniti! Ipsum laborum sequi doloremque qui
                  vitae, suscipit rem voluptates ea temp.
                </p>
              </div>
              <div className="col-4">
                <p className="fs-5 text-start px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates optio ut,
                  praesentium aliquid omnis nisi id? Labore rem quis cupiditate nulla! Repellat
                  veniam sint deleniti pariatur repudiandae eaque in dignissimos numquam quam nihil
                  vitae expedita, quisquam non dolorem a quos maiores. Ad harum itaque quaerat nulla
                  quos ipsam sint?
                </p>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
