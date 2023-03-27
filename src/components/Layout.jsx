import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
