import React from "react";

// components;
import Footer from "./Footer";
import NavBar from "./NavBar";
import BackToTop from "./BackToTop";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <BackToTop />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
