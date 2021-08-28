import React,{useEffect} from "react";
import tippy,{createSingleton} from "tippy.js";

// components
import Link from "next/link";

const Footer: React.FC = () => {

  useEffect(()=>{
    tippy(".social-links a",{
      theme:"light"
    });
  },[])

  return (
    <React.Fragment>
      <footer id="footer" className="bg-white">
        <div className="footer-top">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Alguero</h3>
                <h5 className="text-muted">Subscribe to get updated when new things get released!</h5>
              </div>
            </div>
            <div id="subscribe"className="row footer-newsletter justify-content-center">
              <div className="col-lg-6">
                <form method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>

            <div className="social-links">
              <a
                href={process.env.discord}
                className="discord"
                target="_tab"
                data-tippy-content="join me in Discord server"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                href={process.env.facebook}
                className="facebook"
                target="_tab"
                data-tippy-content="Follow me in Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={process.env.instagram}
                className="instagram"
                target="_tab"
                data-tippy-content="Follow me in Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={process.env.github}
                className="github"
                target="_tab"
                data-tippy-content="Follow me in Github"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="d-flex align-items-end justify-content-center">
            <li>
              <Link href="/">
                <a className="text-muted me-3">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="text-muted me-3">Digtal Services</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-muted me-3">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <a className="text-muted me-3">Documents</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Alguero</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href={process.env.github} target="_tab">Alguerocode</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
