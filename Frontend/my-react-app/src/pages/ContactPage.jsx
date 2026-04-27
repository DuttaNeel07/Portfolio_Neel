import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setName("");
      setMessage("");

    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page fade-up">
      <span className="section-tag">Contact</span>
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-sub">
        Whether you want to collaborate, ask something, or just say hello — I'd love to hear from you.
      </p>

      <div className="contact-layout">

        {/* ── Form ── */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name <span className="optional">(optional)</span></label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              id="message"
              rows={6}
              placeholder="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending…" : "Send Message →"}
          </button>

          {status === "success" && (
            <div className="status-msg success">✓ Message sent! I'll get back to you soon.</div>
          )}
          {status === "error" && (
            <div className="status-msg error">Something went wrong. Make sure the backend is running, or email me directly.</div>
          )}
        </form>

        {/* ── Info panel ── */}
        <div className="contact-info">
          <div className="info-item">
            <span className="info-label">Email</span>
            <a href="mailto:neel.dutta0729@gmail.com" className="info-value">
              neel.dutta0729@gmail.com
            </a>
          </div>
          <div className="info-item">
            <span className="info-label">GitHub</span>
            <a href="https://github.com/DuttaNeel07" target="_blank" rel="noreferrer" className="info-value">
              github.com/DuttaNeel07
            </a>
          </div>
          <div className="info-item">
            <span className="info-label">Based in</span>
            <span className="info-value">India 🇮🇳</span>
          </div>
          <div className="info-note">
            I'm open to internships, freelance projects, and entry-level opportunities. Don't hesitate to reach out!
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;