export type Project = {
  number: string
  name: string
  category: string
  description: string
  tags: string[]
  href?: string
  action: string
  visual: 'ephem' | 'proctoring' | 'bassance'
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Ephem',
    category: 'Privacy-focused messaging',
    description:
      'An ephemeral messaging application built around privacy, client-side encryption, and real-time communication.',
    tags: ['Android', 'WebSockets', 'Cryptography'],
    href: 'https://github.com/pj1234567890/ephem',
    action: 'View on GitHub',
    visual: 'ephem',
  },
  {
    number: '02',
    name: 'AI-Powered Proctoring',
    category: 'Multimodal AI / Computer Vision',
    description:
      'An AI-assisted examination monitoring project exploring computer vision and audio intelligence to identify potentially suspicious activity during online exams.',
    tags: ['Python', 'PyTorch', 'Computer Vision'],
    action: 'Case study coming soon',
    visual: 'proctoring',
  },
  {
    number: '03',
    name: 'Bassance',
    category: 'Machine learning / Audio classification',
    description:
      'An AI-powered EDM genre classification project exploring deep learning for electronic music audio.',
    tags: ['PyTorch', 'SpecResNet', 'Spring Boot', 'FastAPI'],
    href: 'https://bassance.hostless.app/',
    action: 'Try live demo',
    visual: 'bassance',
  },
]

export const skillGroups: SkillGroup[] = [
  { label: 'Programming languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Backend engineering', items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Node.js', 'Express.js', 'FastAPI', 'REST API development', 'Microservices', 'WebSockets', 'JWT authentication'] },
  { label: 'Frontend development', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive web design'] },
  { label: 'Databases & persistence', items: ['PostgreSQL', 'MySQL', 'Firebase Realtime Database', 'pgvector', 'SQL query development', 'Database schema design', 'Database indexing'] },
  { label: 'AI & machine learning', items: ['PyTorch', 'Deep learning', 'Computer vision', 'YOLOv8', 'ResNet-based architectures', 'Audio classification', 'Spectrogram-based audio processing', 'FastAPI-based ML inference'] },
  { label: 'Testing & software quality', items: ['Karate', 'Chaos Monkey for Spring Boot', 'OpenRewrite', 'Static code analysis', 'Fault injection', 'Resilience testing', 'Automated testing', 'Test telemetry analysis'] },
  { label: 'Security & architecture', items: ['JWT', 'Spring Security', 'Client-side encryption', 'Cryptographic key derivation', 'Stateless backend architecture', 'Secure API development', 'Microservices architecture'] },
  { label: 'Developer tools', items: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'Visual Studio Code', 'Postman', 'pgAdmin 4'] },
  { label: 'Core computer science', items: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'System design fundamentals'] },
]
