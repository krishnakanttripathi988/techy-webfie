// src/components/about/About.jsx
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">📖 About Me</h1>
      <p className="about-text">
        👋 Hi, I'm <strong>Krishna Kant Tripathi</strong>, a passionate <em>Full-Stack Software Engineer</em> specializing in scalable backends (Java, Go), dynamic frontends (React), and cloud-native deployments (AWS, GCP).
      </p>

      <section className="about-section">
        <h2>👨‍💻 Background</h2>
        <p>
          Completed B.Tech in Computer Science & Engineering from Lovely Professional University. My core interests include Algorithms, Distributed Systems, and Machine Learning. As Coding Club President, I led hackathons and mentored peers, fostering a collaborative dev community.
        </p>
      </section>

      <section className="about-section">
        <h2>⚙️ Tech Stack</h2>
        <ul>
          <li><code>Java</code>, <code>Go</code>, <code>Python</code></li>
          <li><code>Spring Boot</code>, <code>Dropwizard</code>, <code>Flask</code></li>
          <li><code>React.js</code>, <code>Redux</code>, <code>TypeScript</code></li>
          <li><code>AWS (EKS, S3, RDS)</code>, <code>GCP (Cloud Run, Firebase)</code></li>
          <li><code>Docker</code>, <code>Kubernetes</code>, <code>Terraform</code></li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🚀 Projects & Interests</h2>
        <ul>
          <li>Edge-AI Face Recognition on Raspberry Pi cluster (98% accuracy)</li>
          <li>Custom Voice-Cloning model using PyTorch</li>
          <li>Open-source contributions in CI/CD tools and ML frameworks</li>
        </ul>
      </section>

      <div className="resume-download">
        <a href="/KrishnaKantTripathi_Resume.pdf" download="KrishnaKantTripathi_Resume.pdf" className="download-button">
          💾 Download My Resume
        </a>
      </div>
    </div>
  );
}
