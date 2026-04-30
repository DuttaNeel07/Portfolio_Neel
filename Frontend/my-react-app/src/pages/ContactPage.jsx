import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("Message cannot be empty");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("Message sent!");
      setName("");
      setMessage("");

    } catch {
      setStatus("Error sending message");
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br /><br />

        <button type="submit">Send</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactPage;