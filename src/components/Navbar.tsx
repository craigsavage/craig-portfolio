import DarkModeToggle from './DarkModeToggle';

/** Navbar Component */
export default function Navbar() {
  return (
    <nav className='flex justify-between p-4 bg-white shadow-md dark:bg-black'>
      <div className='flex items-center'>
        <a
          href='#'
          className='text-xl font-bold text-zinc-900 dark:text-zinc-100'
        >
          Craig&apos;s Portfolio
        </a>
      </div>
      <div className='flex items-center gap-6'>
        <ul className='flex items-center space-x-4'>
          <li>
            <a href='#about' className='hover:text-sky-500'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='hover:text-sky-500'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-sky-500'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-sky-500'>
              Contact
            </a>
          </li>
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
