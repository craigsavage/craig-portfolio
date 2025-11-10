'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
      aria-label='Toggle dark mode'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <BsFillSunFill className='h-5 w-5 text-gray-800 dark:text-gray-200' />
      ) : (
        <BsFillMoonStarsFill className='h-5 w-5 text-gray-800 dark:text-gray-200' />
      )}
    </button>
  );
}
