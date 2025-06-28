// src/components/projects/Projects.jsx
import React from 'react';

export default function Projects() {
  const cardStyle = {
    background: '#111',
    border: '2px solid #50fa7b',
    borderRadius: '6px',
    padding: '1.25rem',
    margin: '0.75rem',
    width: 'calc(50% - 1.5rem)',
    boxSizing: 'border-box',
    boxShadow: '0 0 12px rgba(80,250,123,0.3)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };
  const linkStyle = { color: '#8be9fd', textDecoration: 'underline' };

  const professional = [
    {
      title: 'Anti Money Laundering App',
      tech: ['Spring Boot', 'Apache Spark', 'Solr', 'PostgreSQL', 'Docker'],
      details: 'Designed a screening pipeline handling 5,000 QPS for AML detection. Optimized Spark jobs and Solr indexing to reduce end-to-end latency by 40%, ensuring compliance with global watchlists.',
    },
    {
      title: 'Business Verification Reporting',
      tech: ['Dropwizard', 'React.js', 'MySQL', 'Kafka'],
      details: 'Built a fault-tolerant reporting service with asynchronous job queues. Integrated React dashboard for real-time analytics, cutting report generation time from minutes to seconds.',
    },
    {
      title: 'Digilocker & ShareSphere Integration',
      tech: ['Spring Cloud', 'AWS SQS', 'Amazon DocumentDB', 'Grafana'],
      details: 'Led microservice integration for secure document verification. Implemented retry and dead-letter queues in SQS and set up Grafana monitoring to maintain 99.9% uptime.',
    },
    {
      title: 'Fuzzy Matching Engine',
      tech: ['Java', 'TensorFlow', 'Dropwizard', 'MySQL'],
      details: 'Developed a hybrid rule-and-ML engine for name matching. Combined FuzzyWuzzy heuristics with TensorFlow embeddings, boosting matching accuracy from 82% to 91% in production.',
    },
    {
      title: 'VideoKYC & Aadhaar Masking',
      tech: ['PyTorch', 'YOLOv5', 'Microsoft Clarity', 'Metabase'],
      details: 'Built a video analytics pipeline capturing KYC sessions and masking Aadhaar data. Deployed YOLOv5 models on the edge, processing 10K+ documents/day with 99.9% reliability.',
    },
  ];

  const openSource = [
    {
      title: 'Guess My Real Background',
      link: 'https://github.com/krishnakanttripathi988/guess-my-real-background-',
      stars: 120,
      tech: ['Java', 'JavaFX'],
      details: 'An interactive puzzle game using JavaFX. Implements algorithmic background shuffling and high-score persistence, with a modular plugin system for adding new puzzles.',
    },
    {
      title: 'Virtual Assistant On Screen',
      link: null,
      stars: 85,
      tech: ['Python', 'NLTK', 'gTTS'],
      details: 'A desktop voice assistant with natural language understanding. Uses NLTK for parsing, gTTS for responses, and integrates OS commands for file operations and media control.',
    },
    {
      title: 'Alexa Monthly Festivals',
      link: 'https://github.com/krishnakanttripathi988/alexa-monthly-festivals',
      stars: 150,
      tech: ['Node.js', 'AWS Lambda', 'Alexa Skills Kit'],
      details: 'Custom Alexa skill providing festival information by month. Features voice interaction design and AWS Lambda handlers with DynamoDB-backed caching.',
    },
    {
      title: 'Medical Inventory System',
      link: null,
      stars: 60,
      tech: ['Python', 'Tkinter', 'SQLite'],
      details: 'A desktop management tool for medical stock. Implements CRUD interfaces in Tkinter, real-time search, and reporting via Matplotlib charts.',
    },
  ];

  return (
    <div style={{
      padding: '2rem',
      background: '#000',
      minHeight: '100vh',
      boxSizing: 'border-box',
      fontFamily: 'monospace',
      color: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#50fa7b',
        textShadow: '0 0 8px rgba(80,250,123,0.7)',
        marginBottom: '1rem',
        borderBottom: '2px solid #6272a4',
        paddingBottom: '0.5rem',
        width: '100%',
        textAlign: 'center',
      }}>🚀 My Projects</h1>

      <section style={{ width: '100%' }}>
        <h2 style={{
          fontSize: '1.75rem',
          color: '#ff79c6',
          margin: '1rem 0 0.5rem',
          textShadow: '0 0 6px rgba(255,121,198,0.7)',
        }}>💼 Professional Highlights</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {professional.map(p => (
            <div
              key={p.title}
              style={cardStyle}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 style={{ color: '#8be9fd', margin: '0 0 0.5rem' }}>{p.title}</h3>
              <p style={{ fontStyle: 'italic', margin: '0.25rem 0' }}><b>Tech:</b> {p.tech.join(', ')}</p>
              <p style={{ lineHeight: '1.6' }}>{p.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ width: '100%' }}>
        <h2 style={{
          fontSize: '1.75rem',
          color: '#bd93f9',
          margin: '2rem 0 0.5rem',
          textShadow: '0 0 6px rgba(189,147,249,0.7)',
        }}>💻 Open-Source Contributions</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {openSource.map(p => (
            <div
              key={p.title}
              style={cardStyle}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(139,233,253,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 10px rgba(80,250,123,0.2)'}
            >
              <h3 style={{ margin: '0 0 0.25rem' }}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {p.title}
                  </a>
                ) : p.title} <span style={{ color: '#50fa7b' }}>⭐ {p.stars}</span>
              </h3>
              <p style={{ fontStyle: 'italic', margin: '0.25rem 0' }}>
                <b>Tech:</b> {p.tech.join(', ')}
              </p>
              <p style={{ lineHeight: '1.6' }}>{p.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
