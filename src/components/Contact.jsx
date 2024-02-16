import { useState } from "react";
import "../App.css";

const styles = {
  body: {
    height: "100vh",
  },
  form: {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "black",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { fullName, phone, comment });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="fullName" style={styles.label}>
        Enter your name:
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={styles.input}
        />
      </label>
      <label htmlFor="phone" style={styles.label}>
        Enter your phone number:
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
      </label>
      <label htmlFor="comment" style={styles.label}>
        Enter your message:
        <textarea
          id="comment"
          value={comment}
          rows={4}
          cols={40}
          onChange={(e) => setComment(e.target.value)}
          style={styles.textarea}
        />
      </label>
      <input type="submit" value="Submit" style={styles.submitButton} />
    </form>
  );
}

export default Contact;
