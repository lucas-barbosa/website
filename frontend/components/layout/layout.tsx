import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components;
import Footer from "./Footer";
import NavBar from "./NavBar";
import BackToTop from "./BackToTop";
import { ToastContainer } from "react-toastify";
import Progress from "../progress/Progress";

const Layout: React.FC = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsAnimating(true);
    const handleStop = () => setIsAnimating(false);

    // setup events for listening router and animate progress bar
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      // clear the events
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <React.Fragment>
      <Progress isAnimating={isAnimating}/>
      <NavBar />
      {children}
      <BackToTop />
      <ToastContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
