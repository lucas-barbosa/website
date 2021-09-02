import React from "react";
import styles from "../../styles/home/contact.module.scss";

// components
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="contact" className="contact bg-light">
        <div className="container pt-5">
          <div className="section-title">
            <div className={styles.title}>
              <i className="bi bi-chat-right-text fs-1 p-2 text-primary"></i>
              <h2 className={styles.titleHeader}>Contact Us</h2>
            </div>
            <p className={styles.subTitle}>Contact Us by fill this message box</p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className={styles.info}>
                <div className={styles.address}>
                  <i className={`bi bi-geo-alt ${styles.infoIcon}`}></i>
                  <h4 className={styles.infoHeader}>Location:</h4>
                  <p className={styles.infoPTag}>{process.env.location}</p>
                </div>

                <div className="email">
                  <i className={`bi bi-envelope ${styles.infoIcon}`}></i>
                  <h4 className={styles.infoHeader}>Email:</h4>
                  <p className={styles.infoPTag}>{process.env.email}</p>
                </div>

                <div className="phone">
                  <i className={`bi bi-phone ${styles.infoIcon}`}></i>
                  <h4 className={styles.infoHeader}>Call:</h4>
                  <p className={styles.infoPTag}>{process.env.call}</p>
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
                className={styles.emailForm}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="username">Your Name</label>

                    <div className="input-group flex-nowrap">
                      <span
                        className={`input-group-text bi bi-person fs-3 ${styles.span}`}
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
                        className={`input-group-text bi bi-envelope fs-3 ${styles.span}`}
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
                <div className={`mt-3 ${styles.formGroup}`}>
                  <label htmlFor="subject">Subject</label>
                  <div className="input-group flex-nowrap">
                    <span
                      className={`input-group-text bi bi-journals fs-3 ${styles.span}`}
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
                <div className={`mt-3 ${styles.formGroup}`}>
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className={styles.submitButton}>Send Message</button>
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
