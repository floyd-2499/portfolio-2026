import Image from "next/image";

import styles from "./styles.module.scss";
import { useState } from "react";

const ContactSection = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles["section-main"]} id="contact">
      <div className={styles["section-background-container"]}>
        <div className={styles["backgrond-text-1"]}>contact</div>
        <div className={styles["backgrond-text-2"]}>contact</div>
      </div>
      <div className={styles["section-container"]}>
        <div className={styles["section-container-contents"]}>
          <div className={styles["contact-form-section"]}>
            <div className={styles["contact-form-section-header"]}>GET IN TOUCH</div>
            <div className={styles["contact-form"]}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button>Send Message</button>
            </div>
          </div>
          <div className={styles["contact-card-section"]}>
            Images
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
