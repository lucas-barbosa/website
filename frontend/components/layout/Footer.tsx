import * as React from "react";

// components
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer id="footer" className="bg-white">
        <div className="footer-top">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Alhashmicode</h3>
              </div>
            </div>
            <div className="row footer-newsletter justify-content-center">
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
                href="https://discord.com/channels/879049803043053589/879049803550572645"
                className="discord"
                target="_tab"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                href="https://www.facebook.com/salah.alhashmi.52"
                className="facebook"
                target="_tab"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/alhashmicode"
                className="instagram"
                target="_tab"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://github.com/alhashmicode"
                className="github"
                target="_tab"
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
              <Link href="/blogs">
                <a className="text-muted me-3">Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Alhashmicode</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://alhashmicode.vercel.app/">alhashmicode</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
