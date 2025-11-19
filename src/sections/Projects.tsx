import ProjectCard from '@/components/ProjectCard';
import SectionWrapper from '@/components/SectionWrapper';

const projects = [
  {
    title: 'Border Patrol',
    description:
      'A Google Chrome extension that visually outlines webpage elements and reveals key box-model details (margins, padding, borders) for rapid CSS and layout debugging. Built to help developers and designers diagnose layout issues efficiently.',
    tech: [
      'TypeScript',
      'React',
      'Chrome Extensions APIs',
      'Ant Design',
      'Rollup',
    ],
    image: '/projects/border-patrol-demo.png',
    website:
      'https://chromewebstore.google.com/detail/fdkdknepjdabfaihhdljlbbcjiahmkkd?utm_source=item-share-cb',
    github: 'https://github.com/craigsavage/border-patrol',
  },
  {
    title: 'Financial Expense Tracker',
    description:
      'Full-stack expense tracking platform that lets users track expenses, set spending limits, and upload receipts. Designed for fast performance and a seamless user experience.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'TanStack Query', 'Vite'],
    image: '/projects/financial-tracker.png',
    website: '',
    github: '',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio built with Next.js and fully optimized for performance, accessibility, and responsive design. Deployed on Vercel with automated CI/CD.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    image: '/projects/portfolio-light-mode.png',
    website: '',
    github: 'https://github.com/craigsavage/craig-portfolio',
  },
];

/** Projects Section Component */
export default function Projects() {
  return (
    <SectionWrapper id='projects' title='Projects'>
      <p>Here are some of my recent projects:</p>

      <ul className='mt-4 space-y-4'>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
