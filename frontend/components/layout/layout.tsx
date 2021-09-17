import React from "react";

// components;
import Footer from "./Footer";
import NavBar from "./NavBar";
import BackToTop from "./BackToTop";
import { ToastContainer } from "react-toastify";
import ProgressBar from "../progress/index";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <ProgressBar />
      <NavBar />
      {children}
      <BackToTop />
      <ToastContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
