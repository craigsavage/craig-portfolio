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
    items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      'Django',
      'Node.js',
      'Express',
      'Postgres',
      'AWS',
      'Supabase',
      'Redis',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      'Docker',
      'Git',
      'Figma',
      'Vercel',
      'Ansible',
      'Jenkins',
      'Postman',
      'Jest',
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
