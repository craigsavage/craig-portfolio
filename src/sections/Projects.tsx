import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Border Patrol',
      description:
        'A Chrome extension for developers to toggle borders and inspect webpage layouts efficiently.',
      tech: ['TypeScript', 'React', 'Chrome Extensions API'],
      image: '',
      website:
        'https://chromewebstore.google.com/detail/fdkdknepjdabfaihhdljlbbcjiahmkkd?utm_source=item-share-cb',
      github: 'https://github.com/craigsavage/border-patrol',
    },
    {
      title: 'Financial Budget Tracker',
      description:
        'A web application to help users track their income and expenses, set budgets, and upload receipts for better financial management.',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'Tanstack Query'],
      image: '',
      website: '',
      github: '',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my projects and skills.',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      image: '',
      website: '',
      github: 'https://github.com/craigsavage/craig-portfolio',
    },
  ];

  return (
    <div className='my-16 w-full'>
      <h2 className='mb-4 text-2xl font-bold'>Projects</h2>
      <p>Here are some of my recent projects:</p>

      <ul className='mt-4 space-y-4'>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
