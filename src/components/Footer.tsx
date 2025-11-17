/** Footer Component */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='w-full py-8 text-center text-sm text-gray-500 dark:text-gray-400'>
      <div>Craig Savage © {year} | All rights reserved.</div>

      <div className='mt-4 flex justify-center gap-6 text-gray-500 dark:text-gray-400'>
        <a
          href='mailto:csavage.dev@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          className='hover:text-sky-500'
        >
          Email
        </a>
        <a
          href='https://linkedin.com/in/csavage647'
          rel='noopener noreferrer'
          target='_blank'
          className='hover:text-sky-500'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/craigsavage'
          rel='noopener noreferrer'
          target='_blank'
          className='hover:text-sky-500'
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
