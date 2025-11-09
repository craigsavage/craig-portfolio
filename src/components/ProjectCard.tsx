import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  website: string;
  github: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='border border-gray-300 dark:border-gray-700 p-4 rounded-md'>
      <h3 className='font-semibold mb-2'>{project.title}</h3>
      <Image
        src={project.image || '/placeholder-img.png'}
        alt={project.title}
        width={600}
        height={400}
        className='w-full h-40 object-cover'
      />
      <div className='mt-3'>
        <p className='text-gray-700 dark:text-gray-300 text-sm mb-3'>
          {project.description}
        </p>
        <ul className='mb-3 flex flex-wrap gap-2'>
          {project.tech.map(item => (
            <li
              key={item}
              className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30'
            >
              {item}
            </li>
          ))}
        </ul>
        <div className='mt-2 flex space-x-4'>
          {project.website && (
            <a href={project.website} className='text-blue-500'>
              Website
            </a>
          )}
          {project.github && (
            <a href={project.github} className='text-blue-500'>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
