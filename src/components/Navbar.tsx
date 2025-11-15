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
  return (
    <nav className='flex justify-between p-4 bg-white shadow-md dark:bg-black'>
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
