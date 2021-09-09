import React, {useEffect} from "react";
import tippy from "tippy.js";

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

    // tooltip to backtotop button

    tippy(".back-to-top", {
      content: "<h6 class='text-muted'>Go Up⬆️</h6>",
      animation: "perspective-subtle",
      theme: "light",
      maxWidth:195,
      allowHTML:true,
      delay:[400, 0],
      hideOnClick:true,
    });

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
