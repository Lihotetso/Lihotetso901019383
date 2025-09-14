import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us using the details below:</p>
      <ul>
        <li><strong>Address:</strong> Maseru 100, Mshoeshoe Road</li>
        <li><strong>Phone:</strong>+266 62168628</li>
        <li><strong>Facebook:</strong> <a href="https://facebook.com/wingscafee" target="_blank" rel="noopener noreferrer">Wings Cafee</a></li>
      </ul>
      <p>Follow us on Facebook for updates and special offers!</p>
    </div>
  );
}

export default ContactUs;
