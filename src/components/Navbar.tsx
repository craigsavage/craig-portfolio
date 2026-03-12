'use client';

import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

interface NavLinkProps {
  href: string;
  label: string;
}

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

/** Navbar Component */
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex justify-between p-4 bg-white shadow-md dark:bg-black fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex items-center'>
        <a
          href='#'
          className='text-xl font-bold text-zinc-900 dark:text-zinc-100'
        >
          Craig Savage
        </a>
      </div>
      <div className='flex items-center gap-6'>
        <ul className='flex items-center gap-4'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

/** Nav Link Component */
export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a href={href} className='hover:text-sky-500'>
      {label}
    </a>
  );
}
