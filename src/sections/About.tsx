const education = [
  {
    degree: 'Bachelor of Engineering (Honours), Software Engineering',
    institution: 'Ontario Tech University',
    period: 'Sept 2016 - May 2020',
  },
  {
    degree: 'Graphic Design',
    institution: 'Seneca College',
    period: 'Sept 2012 - May 2015',
  },
];

/** About Section Component */
export default function About() {
  return (
    <section id='about' className='my-16 w-full'>
      <h2 className='mb-4 text-2xl font-bold'>About Me</h2>
      <p className='mb-4 text-zinc-700 dark:text-zinc-300'>
        I&apos;m Craig Savage, a Senior Software Engineer in Toronto. I work on
        full-stack systems, turning complex ideas into products that people
        actually want to use. I care about performance and clean architecture,
        but I&apos;m equally focused on shipping things that matter.
      </p>
      <p className='mb-4 text-zinc-700 dark:text-zinc-300'>
        I&apos;ve spent time across the stack (frontend, backend,
        infrastructure), and I genuinely enjoy mentoring engineers and helping
        teams build better. I think great software comes from thoughtful design,
        pragmatic problem-solving, and code that&apos;s a pleasure to maintain.
      </p>

      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-3'>Education</h3>
        <ul className='space-y-2 text-zinc-700 dark:text-zinc-300'>
          {education.map(item => (
            <li
              key={item.degree}
              className='border-l-4 border-zinc-300 pl-4 dark:border-zinc-700 hover:border-sky-500 transition-colors duration-300'
            >
              <strong>{item.degree}</strong>
              <div className='text-sm text-zinc-600 dark:text-zinc-400'>
                {item.institution} &middot; {item.period}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
