import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
} from 'lucide-react'
import { projects, skillGroups, type Project } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Priyanshu Jain home">
          <span className="wordmark-mark">PJ</span>
          <span>Priyanshu Jain</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <ExternalLink href="https://github.com/pj1234567890" className="nav-github">
            GitHub <ArrowUpRight size={14} />
          </ExternalLink>
        </div>
        {open && (
          <div className="mobile-nav" id="mobile-navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <ExternalLink href="https://github.com/pj1234567890">GitHub <ArrowUpRight size={14} /></ExternalLink>
          </div>
        )}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
          <span className="status-dot" /> Software engineer & AI developer
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.08, duration: 0.65 } } }}>
          Priyanshu<br /><em>Jain.</em>
        </motion.h1>
        <motion.p className="hero-intro" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.16, duration: 0.55 } } }}>
          I enjoy building things, figuring out how they work, and exploring technologies outside my comfort zone. From backend systems to AI-powered applications, I&apos;m always looking for something new to learn and a problem worth solving.
        </motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.24, duration: 0.55 } } }}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
          <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
        </motion.div>
      </div>
      <div className="hero-aside">
        <div className="orbit-art" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">PJ</span>
          <span className="orbit-label label-top">curious by default</span>
          <span className="orbit-label label-bottom">build / learn / repeat</span>
        </div>
        <div className="hero-meta">
          <span>Based in Indore, India</span>
          <span className="meta-line" />
          <span>Open to interesting problems</span>
        </div>
      </div>
      <a href="#projects" className="scroll-cue" aria-label="Scroll to selected projects">
        <span>Scroll to explore</span><ArrowDownRight size={17} />
      </a>
    </section>
  )
}

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'ephem') return <div className="visual-ephem" aria-hidden="true"><span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="connection connection-a" /><span className="connection connection-b" /><div className="message-chip">encrypted message <span>•••</span></div></div>
  if (type === 'proctoring') return <div className="visual-proctoring" aria-hidden="true"><div className="face-frame"><span /><span /><i /></div><div className="waveform">{Array.from({ length: 18 }, (_, i) => <b key={i} style={{ height: `${18 + ((i * 17) % 34)}px` }} />)}</div><span className="scan-label">multi-modal scan / 02</span></div>
  return <div className="visual-bassance" aria-hidden="true"><div className="frequency">{Array.from({ length: 28 }, (_, i) => <b key={i} style={{ height: `${12 + ((i * 23) % 60)}%` }} />)}</div><div className="genre-labels"><span>ambient</span><span className="active">edm</span><span>house</span></div></div>
}

function Projects() {
  return (
    <section className="section shell" id="projects">
      <div className="section-heading">
        <div><span className="section-index">01 /</span><h2>Selected work</h2></div>
        <p>Three projects from different corners of software engineering — built to understand, not just to ship.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: index * 0.08 } } }}>
            <div className="project-info">
              <span className="project-number">{project.number}</span>
              <div className="project-heading"><p className="project-category">{project.category}</p><h3>{project.name}</h3></div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              {project.href ? <ExternalLink href={project.href} className="project-link">{project.action} <ArrowUpRight size={15} /></ExternalLink> : <span className="project-link muted-link">{project.action}</span>}
            </div>
            <ProjectVisual type={project.visual} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

const internshipContributions = [
  'Developed an AI-assisted resilience testing framework for Spring Boot microservices, automating failure validation and reducing manual testing cycles by approximately 60%.',
  'Applied OpenRewrite to analyze enterprise Java codebases and generate dependency graphs mapping 20+ REST endpoints, databases, and third-party APIs.',
  'Integrated LLM-generated Karate test suites into the testing workflow, achieving 85%+ automated coverage across critical failure scenarios.',
  'Implemented fault-injection scenarios using Chaos Monkey for Spring Boot to evaluate application behavior under network latency and service outages.',
  'Built an evaluation engine to parse test-execution telemetry and identify potential architectural single points of failure across distributed services.',
]

const internshipTechnologies = [
  'Java', 'Spring Boot', 'Microservices', 'OpenRewrite', 'Large language models',
  'Karate', 'Chaos Monkey for Spring Boot', 'REST APIs', 'Static code analysis',
  'Automated testing', 'Fault injection', 'Resilience testing', 'Test-execution telemetry',
]

function Experience() {
  return (
    <section className="section shell experience-section" id="experience">
      <div className="section-heading">
        <div><span className="section-index">01 /</span><h2>Professional experience</h2></div>
        <p>Engineering work focused on understanding how distributed systems respond when things go wrong.</p>
      </div>
      <motion.article className="experience-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
        <div className="experience-meta">
          <span className="experience-kicker">Internship / 2026</span>
          <h3>Mastercard</h3>
          <p className="experience-role">Software Engineering Intern</p>
          <div className="experience-details"><span>Pune, India</span><span>May 2026 — July 2026</span></div>
          <span className="experience-mark" aria-hidden="true">MC</span>
        </div>
        <div className="experience-body">
          <p className="experience-overview">Worked on an AI-assisted resilience testing framework for Spring Boot microservices, combining static code analysis, automated test generation, and fault injection to evaluate how distributed applications behave under failure conditions.</p>
          <div className="contribution-heading"><span>Technical contributions</span><span>05 items</span></div>
          <ol className="contribution-list">{internshipContributions.map((contribution, index) => <li key={contribution}><span>0{index + 1}</span><p>{contribution}</p></li>)}</ol>
          <div className="experience-tech"><span className="experience-tech-label">Technologies</span><div className="experience-tech-list">{internshipTechnologies.map(technology => <span key={technology}>{technology}</span>)}</div></div>
        </div>
      </motion.article>
    </section>
  )
}

function About() {
  return <section className="section shell about-grid" id="about"><div className="section-heading compact"><div><span className="section-index">04 /</span><h2>About me</h2></div></div><div className="about-copy"><p className="large-copy">I&apos;m interested in understanding how things work, not just getting them to run.</p><p>I enjoy moving between different areas of development, learning new tools, and figuring out how individual pieces fit together into a working system. That has led me from backend engineering and application security to computer vision and audio classification.</p></div></section>
}

function Skills() {
  return <section className="section shell skills-section" id="skills"><div className="section-heading compact"><div><span className="section-index">03 /</span><h2>Technical skills</h2></div><p>A broad working toolkit shaped by projects, coursework, and practical engineering experience.</p></div><div className="skills-grid">{skillGroups.map(group => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
}

function Education() {
  return <section className="section shell education-section" id="education"><div className="section-heading"><div><span className="section-index">05 /</span><h2>Education & problem-solving</h2></div></div><div className="timeline"><div className="timeline-item"><span className="timeline-label">Education</span><div><h3>B.Tech in Computer Science and Engineering</h3><p>SGSITS Indore</p></div><span className="timeline-date">2023 — 2027<br />8.51/10</span></div><div className="timeline-item"><span className="timeline-label">Problem solving</span><div><h3>500+ LeetCode problems solved</h3><p>Consistent practice focused on building strong computer science fundamentals.</p></div><span className="timeline-date">500+</span></div></div></section>
}

function Contact() {
  return <section className="contact shell" id="contact"><span className="section-index">05 / contact</span><h2>Have something<br /><em>interesting</em> in mind?</h2><p>I&apos;m always interested in connecting with people who enjoy building things and exploring new ideas.</p><div className="contact-links"><ExternalLink href="https://github.com/pj1234567890"><Github size={17} /> GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/priyanshu-jain-56a902356/"><Linkedin size={17} /> LinkedIn</ExternalLink></div></section>
}

function Footer() {
  return <footer className="footer shell"><span>© {new Date().getFullYear()} Priyanshu Jain</span><span>Built with curiosity.</span><div><ExternalLink href="https://github.com/pj1234567890">GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/priyanshu-jain-56a902356/">LinkedIn</ExternalLink></div></footer>
}

function App() {
  return <><Navbar /><main><Hero /><Experience /><Projects /><Skills /><About /><Education /><Contact /></main><Footer /></>
}

export default App
