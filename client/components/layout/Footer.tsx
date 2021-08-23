import * as React from "react";

export async function getServerSideProps() {
  return {
    props: "welcome there",
  };
}

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Alhashmicode</h3>
                <p>
                  Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                  magni eligendi fuga maxime saepe commodi placeat.
                </p>
              </div>
            </div>

            <div className="row footer-newsletter justify-content-center">
              <div className="col-lg-6">
                <form action="" method="post">
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
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
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
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
