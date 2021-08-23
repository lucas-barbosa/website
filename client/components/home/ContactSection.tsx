import React from "react";

// components
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="contact" className="contact bg-light">
        <div className="container pt-5">
          <div className="section-title">
            <div className="contact-title">
              <i className="bi bi-chat-right-text fs-1 p-2 text-primary"></i>
              <h2>Contact Us</h2>
            </div>
            <p className="sub-title">Contact Us by fill this message box</p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Oman Muscat</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>alhashmis246@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+none none</p>
                </div>

                <Image
                  src="/images/contact.png"
                  width="450"
                  height="450"
                  alt="alhashicode contact vector image email location"
                />
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="username">Your Name</label>

                    <div className="input-group flex-nowrap">
                      <span
                        className="input-group-text bi bi-person fs-4"
                        id="addon-wrapping"
                      />
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="email">Your Email</label>
                    <div className="input-group flex-nowrap">
                      <span
                        className="input-group-text bi bi-envelope fs-4"
                        id="addon-wrapping"
                      />
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        aria-label="Email"
                        aria-describedby="addon-wrapping"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text bi bi-journals fs-4"
                      id="addon-wrapping"
                    />
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      aria-label="Subject"
                      aria-describedby="addon-wrapping"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactSection;
