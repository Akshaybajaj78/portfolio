import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Information */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:bajajansh68@gmail.com"
                data-cursor="disable"
                aria-label="Send Email"
              >
                bajajansh68@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a
                href="tel:+917404827015"
                data-cursor="disable"
                aria-label="Call Phone Number"
              >
                +91 7404827015
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Akshaybajaj78"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/akshay-bajaj-11484727b"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://x.com/bajajansh68"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="X (Twitter)"
            >
              X (Twitter) <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/akshay__bajaj__/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Instagram"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed &amp; Developed <br />
              by <span>Akshay Bajaj</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()} All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;