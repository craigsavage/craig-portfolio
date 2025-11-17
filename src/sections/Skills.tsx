import SectionWrapper from '@/components/SectionWrapper';
import Tabs from '@/components/Tabs';

const skills = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS'],
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
      'Restful APIs',
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
      'CI/CD',
      'Microservices',
      'Git',
      'GitHub Actions',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      'Vite',
      'Rollup',
      'Webpack',
      'Jest',
      'Postman',
      'Figma',
      'Notion',
      'JIRA',
      'ClickUp',
    ],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    items: [
      'System Design',
      'Distributed Systems',
      'Cloud Architecture',
      'Scalability',
      'Performance Optimization',
      'Data Structures & Algorithms',
      'Agile/Scrum',
      'Object-Oriented Programming (OOP)',
      'Functional Programming',
    ],
  },
];

/** Skills Section Component */
export default function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <p className='mb-6 text-zinc-700 dark:text-zinc-300'>
        Here are the technologies I&apos;ve been working with recently.
      </p>
      <Tabs tabs={skills} />
    </SectionWrapper>
  );
}
