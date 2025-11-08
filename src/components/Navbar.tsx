import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='flex justify-between p-4 bg-white shadow-md dark:bg-black'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold text-zinc-900 dark:text-zinc-100'>
          Craig's Portfolio
        </h1>
      </div>
      <ul className='flex items-center space-x-4'>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
