'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleMount = () => setMounted(true);
    handleMount();
    return handleMount;
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex items-center justify-center rounded-md p-2'
    >
      {theme === 'dark' ? (
        <FaSun className='h-5 w-5 text-yellow-500' />
      ) : (
        <FaMoon className='h-5 w-5 text-gray-800' />
      )}
    </button>
  );
}
