import Image from "next/image";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

import visitCardFront from "../../../assets/profile/visit-card-front.png";
import visitCardBack from "../../../assets/profile/visit-card-back.png";


const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      setResponse({
        success: res.ok && data.success === true,
        message: data.message || "Something went wrong.",
      });

      if (res.ok && data.success === true) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      setResponse({
        success: false,
        message: "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(response){
      setTimeout(() => {setResponse(null)}, 3000)
    }
  }, [response])

  console.log(response);
  

  return (
    <div className={styles["section-main"]} id="contact">
      <div className={styles["section-background-container"]}>
        <div className={styles["backgrond-text-1"]}>contact</div>
        <div className={styles["backgrond-text-2"]}>contact</div>
      </div>

      <div className={styles["section-container"]}>
        <div className={styles["section-container-contents"]}>
          <div className={styles["contact-form-section"]}>
            {response ? (
              <div className={styles["contact-request-message"]}>
                {response?.message}
            </div>) : (
              <>
                <div className={styles["contact-form-section-header"]}>
                  GET IN TOUCH
                </div>

                <form
                  className={styles["contact-form"]}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                </form>
              </>

            )}
          </div>

          <div className={styles["contact-card-section"]}>
            <div className={styles["visit-card"]}>
              <Image
                src={visitCardFront}
                alt="Visit Card Front"
                width={400}
                height={250}
              />
            </div>

            <div className={styles["visit-card"]}>
              <Image
                src={visitCardBack}
                alt="Visit Card Back"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactSection;
