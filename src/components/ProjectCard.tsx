import Image from 'next/image';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

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

/** Project Card Component */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='border border-gray-300 dark:border-gray-700 p-4 rounded-md'>
      <h3 className='font-semibold mb-2'>{project.title}</h3>
      <Image
        src={project.image || '/placeholder-img.png'}
        alt={project.title}
        width={600}
        height={400}
        className='w-full h-40 object-cover object-top'
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
            <a
              href={project.website}
              target='_blank'
              className='inline-flex items-center gap-2 rounded-md border border-zinc-300 px-2 py-1 text-sm/6 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
            >
              <FaArrowUpRightFromSquare size={15} /> Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              className='inline-flex items-center gap-2 rounded-md border border-zinc-300 px-2 py-1 text-sm/6 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
            >
              <FaGithub size={15} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
