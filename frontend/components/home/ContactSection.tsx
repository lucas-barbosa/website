import React, { FormEvent, useState } from "react";
import styles from "../../styles/home/contact.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../api/axios";
import { toast } from "react-toastify";

// components
import Image from "next/image";

const ContactSection: React.FC = () => {
  const [sending, setSending] = useState(false);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        username: "",
        subject: "",
        message: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Email is invalid")
          .max(100, "email should be at most 100 characters")
          .required("email is required"),
        username: Yup.string()
          .min(4, "username should be at least 4 characters")
          .max(20, "username should at most than 20 characters")
          .trim()
          .required("username is required"),
        subject: Yup.string()
          .min(8, "subject should be at least 8 characters")
          .max(50, "subject should at most than 50 characters")
          .trim()
          .required("subject is required"),
        message: Yup.string()
          .min(20, "message should be at least 20 characters")
          .max(300, "message should be at most 300 characters")
          .trim()
          .required("message is required"),
      }),
      onSubmit: async (data) => {
        try {
          setSending(true);
          const res = await API.put("/contacts", data);
          setSending(false);
          toast.success("successfully send the contact 👍🎉");
        } catch (err: any) {
          console.error(err); // toustify
          if (err.response.status == 406) {
            toast.error("Invalid Contact Entered ✍️");
          } else {
            toast.error("Internal Server Error ⚠️");
          }
          setSending(false);
        }
      },
    });

  return (
    <React.Fragment>
      <section id="contact" className="contact bg-light">
        <div className="container pt-5">
          <div className="section-title">
            <div className={styles.title}>
              <i className="bi bi-chat-right-text fs-1 p-2 text-primary"></i>
              <h2 className={styles.titleHeader}>Contact Us</h2>
            </div>
            <p className={styles.subTitle}>
              Contact Us by fill this message box
            </p>
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
                onSubmit={handleSubmit}
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
                        value={values.username}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        id="username"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                      {touched.username && errors.username ? (
                        <p className="lead text-danger">{errors.username}</p>
                      ) : null}
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
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        id="email"
                        className="form-control"
                        aria-label="Email"
                        aria-describedby="addon-wrapping"
                      />
                      {touched.email && errors.email ? (
                        <p className="lead text-danger">{errors.email}</p>
                      ) : null}
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
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="subject"
                      className="form-control"
                      aria-label="Subject"
                      aria-describedby="addon-wrapping"
                    />
                    {touched.subject && errors.subject ? (
                      <p className="lead text-danger">{errors.subject}</p>
                    ) : null}
                  </div>
                </div>
                <div className={`mt-3 ${styles.formGroup}`}>
                  <label htmlFor="name">Message</label>
                  <textarea
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    name="message"
                    rows={10}
                  ></textarea>
                  {touched.message && errors.message ? (
                    <p className="lead text-danger">{errors.message}</p>
                  ) : null}
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={sending}
                  >
                    {!sending ? "Send message" : "sending..."}
                  </button>
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
