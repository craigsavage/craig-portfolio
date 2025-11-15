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
        Canada. I specialize in building scalable full-stack systems and leading
        end-to-end product development that bridges technical excellence with
        business impact.
      </p>
      <p className='mb-4 text-zinc-700 dark:text-zinc-300'>
        With experience across frontend, backend, and infrastructure, I focus on
        designing reliable systems, improving performance, and mentoring
        engineers to build maintainable, high-quality software. I’m always
        aiming to deliver clean, efficient code and exceptional user
        experiences.
      </p>
      <p className='text-zinc-700 dark:text-zinc-300'>
        When I’m not coding, I enjoy exploring creative projects, mentoring
        other developers, and learning how thoughtful design and technology can
        intersect to make life easier.
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
