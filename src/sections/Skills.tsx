import SectionWrapper from '@/components/SectionWrapper';
import Tabs from '@/components/Tabs';

const skills = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS'],
  },
  {
    id: 'ai',
    label: 'AI',
    items: [
      'OpenAI API',
      'GenAI Tools',
      'Gemini',
      'Claude',
      'ChatGPT',
      'LLMs',
      'Prompt Engineering',
      'AI Integration',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'Redux',
      'TanStack Query',
      'Sass',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    items: [
      'Django',
      'Node.js',
      'Express',
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Supabase',
      'Kafka',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Vercel',
      'NGINX',
      'Jenkins',
      'CI/CD Pipelines',
      'Git',
      'GitHub Actions',
      'Ansible',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      'Vite',
      'Jest',
      'Postman',
      'Figma',
      'Notion',
      'JIRA',
      'ClickUp',
      'Sentry',
      'VS Code',
      'Cursor',
      'Copilot',
      'Claude Code',
    ],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    items: [
      'System Design',
      'Distributed Systems',
      'Cloud Architecture',
      'Microservices',
      'API Design',
      'RESTful APIs',
      'Scalability',
      'Performance Optimization',
      'Data Structures & Algorithms',
      'Agile Methodologies',
      'Prompt Engineering',
      'Object-Oriented Programming (OOP)',
      'Functional Programming',
    ],
  },
  {
    id: 'softSkills',
    label: 'Soft Skills',
    items: [
      'Technical Leadership',
      'Clear Communication',
      'Team Collaboration',
      'Mentorship & Coaching',
      'Product Thinking',
      'Problem Solving',
      'Adaptability',
      'Critical Thinking',
      'Time & Priority Management',
      'Cross-Functional Collaboration',
    ],
  },
];

/** Skills Section Component */
export default function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <p className='mb-6 text-zinc-700 dark:text-zinc-300'>
        Here are some technologies and concepts I&apos;ve worked with:
      </p>
      <Tabs tabs={skills} />
    </SectionWrapper>
  );
}
