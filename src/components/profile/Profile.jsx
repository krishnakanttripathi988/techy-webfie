import React, { useState } from 'react';
import Console from 'react-console-emulator';

export default function Profile() {
  const [consoleKey, setConsoleKey] = useState(0);
  const clearConsole = () => setConsoleKey(prev => prev + 1);

  // ASCII banner for a hacker look
  const banner = (
    <>
      <span style={{ color: '#8be9fd', fontWeight: 'bold' }}>
        ╔════════════════════════════════════════════════════════╗
      </span>
      <br />
      <span style={{ color: '#8be9fd', fontWeight: 'bold' }}>
        ║   KRISHNA KANT TRIPATHI — TERMINAL PORTFOLIO           ║
      </span>
      <br />
      <span style={{ color: '#8be9fd', fontWeight: 'bold' }}>
        ╚════════════════════════════════════════════════════════╝
      </span>
    </>
  );

  const commands = {
    clear: {
      description: 'Clear the terminal screen',
      usage: 'clear',
      fn: () => clearConsole(),
    },
    whoami: {
      description: 'Show detailed bio & contact',
      usage: 'whoami',
      fn: () => (
        <>
          {banner}
          <br />
          <span style={{ color: '#6272a4' }}>
            ──────────────────────────────────────────────────────────
          </span>
          <br />
          <span style={{ color: '#50fa7b', fontWeight: 'bold' }}>[ WHOAMI ]</span>
          <br />
          Name       : <b>Krishna Kant Tripathi</b>
          <br />
          Role       : <b>Full-Stack Software Engineer</b>
          <br />
          Email      :{' '}
          <a
            href="mailto:tripathikrishnakanttripathi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>tripathikrishnakanttripathi@gmail.com</b>
          </a>
          <br />
          GitHub     :{' '}
          <a
            href="https://github.com/krishnakanttripathi988"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>github.com/krishnakanttripathi988</b>
          </a>
          <br />
          LinkedIn   :{' '}
          <a
            href="https://linkedin.com/in/tripathikrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>linkedin.com/in/tripathikrishna</b>
          </a>
          <br />
          Description: Passionate engineer building scalable backends (Java, Go),<br />
          crafting React frontends, and deploying cloud-native services (AWS, GCP).
        </>
      ),
    },
    education: {
      description: 'Show academic background',
      usage: 'education',
      fn: () => (
        <>
          <span style={{ color: '#6272a4' }}>
            ──────────────────────────────────────────────────────────
          </span>
          <br />
          <span style={{ color: '#bd93f9', fontWeight: 'bold' }}>[ EDUCATION ]</span>
          <br />
          🎓 Degree     : B.Tech in Computer Science & Engineering
          <br />
          🏛 University : Lovely Professional University, Jalandhar
          <br />
          📅 Period     : June 2019 – April 2023 | CGPA: 9.05
          <br />
          • Specialized in Data Structures, Algorithms, and ML fundamentals
          <br />
          • Capstone: Edge-AI Face Recognition on Raspberry Pi cluster (98% validation accuracy)
          <br />
          • Leadership: President of Coding Club—organized 10+ hackathons and mentorship
        </>
      ),
    },
    experience: {
      description: 'Show work history & achievements',
      usage: 'experience',
      fn: () => (
        <>
          <span style={{ color: '#6272a4' }}>
            ──────────────────────────────────────────────────────────
          </span>
          <br />
          <span style={{ color: '#ff79c6', fontWeight: 'bold' }}>[ EXPERIENCE ]</span>
          <br />
          💼 Senior Software Engineer, Digio (Apr 2025 – Present)
          <br />
          • Worked on revamp of Bank Account Verification, bringing logic of full fledged auto switching banks based on the behaviours in case of Penny Less or Penny Drop methodology for Bank Account Verification.
          <br />
          • Scaled up overall KRA (KYC Registration Agency) integration and failover logics;
          <br />
          • Worked on improving success rate of CKYCRR (Central KYC Registration Repository) integration.
          <br />
          💼 Software Engineer, Digio (Apr 2023 – Apr 2025)
          <br />
          • Led AML monitoring pipeline handling 5K QPS using Spring Boot, Spark & Solr
          <br />
          • Developed Business Verification dashboards in Angular & Dropwizard
          <br />
          • Worked in KYC team over several products and improving success rate and integration of several external entities.
          <br />
          👨‍💻 Intern, Digio (Mar 2022 – Mar 2023)
          <br />
          • Engineered fuzzy-match solution with FuzzyWuzzy & TensorFlow: accuracy ↑ from 82% to 91%
          <br />
          • Built Aadhaar-masking service (YOLOv5 & Dropwizard): processed 10K docs/day
          <br />
          • Created VideoKYC analytics dashboard using Microsoft Clarity & Metabase for executive insights
        </>
      ),
    },
    skills: {
      description: 'Show tech stack & tools',
      usage: 'skills',
      fn: () => (
        <>
          <span style={{ color: '#6272a4' }}>
            ──────────────────────────────────────────────────────────
          </span>
          <br />
          <span style={{ color: '#f1fa8c', fontWeight: 'bold' }}>[ SKILLS & TOOLS ]</span>
          <br />
          • <b>Languages:</b> Java ★★★★★ | Go ★★★★☆ | Python ★★★★★ | TypeScript ★★★★☆ | JavaScript ★★★★★
          <br />
          • <b>Backend:</b> Spring Boot, Dropwizard, Flask, GraphQL, REST
          <br />
          • <b>Frontend:</b> React.js, Redux, Webpack, Angular
          <br />
          • <b>Cloud:</b> AWS (EC2, S3, RDS, EKS), GCP (Cloud Run, Firebase)
          <br />
          • <b>Data/ML:</b> Spark, Solr, TensorFlow, PyTorch, OpenCV
          <br />
          • <b>Infra:</b> Docker, Kubernetes, Terraform, Kafka, Redis
          <br />
          • <b>CI/CD & Monitoring:</b> Jenkins, GitHub Actions, SonarQube, ELK, Grafana
        </>
      ),
    },
    help: {
      description: 'List available commands',
      usage: 'help',
      fn: () => (
        <>
          {banner}
          <br />
          <span style={{ color: '#6272a4' }}>
            ──────────────────────────────────────────────────────────
          </span>
          <br />
          • <b>clear</b>      — <i>Clear screen</i>
          <br />
          • <b>whoami</b>     — <i>Bio & contact</i>
          <br />
          • <b>education</b>  — <i>Academic background</i>
          <br />
          • <b>experience</b> — <i>Work history</i>
          <br />
          • <b>skills</b>     — <i>Tech stack overview</i>
        </>
      ),
    },
  };

  return (
    <div className="screen" style={{ padding: '1rem', marginTop: '3rem'}}>
      <Console
        key={consoleKey}
        welcomeMessage={
          <>
            {banner}
            <br />
            <span style={{ color: '#f8f8f2' }}>Type 'help' to view commands.</span>
          </>
        }
        promptLabel={<span style={{ color: '#ff5555', fontWeight: 'bold' }}>$</span>}
        promptLabelStyle={{ marginRight: '0.5rem' }}
        commands={commands}
        noDefaults={true}
        autoFocus
        noAutoScroll={false}
        style={{ fontFamily: 'monospace', backgroundColor: 'transparent', minHeight: '85vh' }}
        contentStyle={{ color: '#50fa7b', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}
        inputStyle={{ color: '#ff79c6', fontFamily: 'monospace' }}
      />
    </div>
  );
}
