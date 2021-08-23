import React, {useEffect} from "react";

const BackToTop: React.FC = () => {
  useEffect(() => {
    const backtotopButton = document.querySelector<HTMLAnchorElement>(".back-to-top");

    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotopButton?.classList.add("active");
      } else {
        backtotopButton?.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    document.addEventListener("scroll", toggleBacktotop);
  }, []);
  return (
    <React.Fragment>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </React.Fragment>
  );
};

export default BackToTop;
