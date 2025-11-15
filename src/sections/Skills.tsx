import SectionWrapper from '@/components/SectionWrapper';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Git',
  'REST APIs',
  // Add more skills as desired
];

/** Skills Section Component */
export default function Skills() {
  return (
    <SectionWrapper id='skills' title='Skills'>
      <ul className='flex flex-wrap justify-center gap-4'>
        {skills.map(skill => (
          <li
            key={skill}
            className='px-4 py-2 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium shadow'
          >
            {skill}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
