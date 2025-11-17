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
        I’m Craig Savage, a Senior Software Engineer based in Toronto, ON,
        Canada. I specialize in architecting and leading the development of
        scalable full-stack systems, focusing on turning complex ideas into
        reliable, high-impact products. I bridge technical excellence with
        business value by driving solutions from initial design through
        deployment while keeping performance, maintainability, and user
        experience at the center.
      </p>
      <p className='mb-4 text-zinc-700 dark:text-zinc-300'>
        With experience across frontend, backend, and infrastructure, I build
        systems that are resilient, efficient, and designed to scale. I mentor
        engineers, define architectural standards, and elevate team execution
        through clean code, thoughtful design, and practical problem-solving.
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
