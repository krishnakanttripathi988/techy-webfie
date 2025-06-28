import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href =
      `mailto:tripathikrishnakanttripthi@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${body}`;
  };

  const container = {
    background: '#111',
    color: '#50fa7b',
    fontFamily: 'monospace',
    padding: '2rem',
    maxWidth: '600px',
    margin: '4rem auto',
    border: '2px solid #6272a4',
    borderRadius: '8px',
    boxShadow: '0 0 12px rgba(80,250,123,0.3)',
  };
  const input = {
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    background: '#222',
    border: '1px solid #6272a4',
    borderRadius: '4px',
    color: '#f8f8f2',
    fontFamily: 'monospace',
  };
  const textarea = { ...input, height: '150px', resize: 'vertical' };
  const button = {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    background: '#8be9fd',
    color: '#282a36',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'monospace',
    fontSize: '1rem',
    transition: 'background 0.2s',
  };

  return (
    <div style={container}>
      <h1 style={{ textAlign: 'center', color: '#ff79c6' }}>📬 Contact Me</h1>
      <p style={{ textAlign: 'center' }}>
        Got a project or just want to say hi? Fill out the form and hit send!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          style={input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          style={input}
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          style={textarea}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={button}>
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
