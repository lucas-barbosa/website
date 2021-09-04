import React from "react";

// components;
import Footer from "./Footer";
import NavBar from "./NavBar";
import BackToTop from "./BackToTop";
import { ToastContainer } from "react-toastify";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <BackToTop />
      <ToastContainer/>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
