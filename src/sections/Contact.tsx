import { FaEnvelope } from 'react-icons/fa6';

/** Contact Section Component */
export default function Contact() {
  return (
    <section id='contact' className='my-16 w-full'>
      <h2 className='mb-4 text-2xl font-bold'>Contact</h2>
      <p className='mb-6 text-zinc-700 dark:text-zinc-300'>
        Feel free to reach out to me via email for any inquiries or
        opportunities.
      </p>
      <div className='flex gap-3'>
        <a
          href='mailto:csavage.dev@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm/6 font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
        >
          <FaEnvelope size={18} /> Email Me
        </a>
      </div>
    </section>
  );
}
