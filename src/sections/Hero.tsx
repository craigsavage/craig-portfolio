import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import SectionWrapper from '@/components/SectionWrapper';

/** Hero Section Component */
export default function Hero() {
  return (
    <SectionWrapper id='hero' disableMarginTop>
      <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <h1 className='text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl'>
          Hey, I&apos;m Craig!
        </h1>
        <p className='max-w-xl text-lg text-zinc-700 dark:text-zinc-300'>
          Senior software engineer who enjoys turning complex problems into
          clean, scalable digital experiences.
        </p>

        <div className='flex gap-3'>
          <a
            href='https://linkedin.com/in/csavage647'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-sky-700'
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a
            href='https://github.com/craigsavage'
            target='_blank'
            rel='noopener noreferrer'
            className=' inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm/6 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href='mailto:csavage.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm/6 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
          >
            <FaEnvelope size={18} /> Email
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
