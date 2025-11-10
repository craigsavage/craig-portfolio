import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';

export const revalidate = 0;

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
