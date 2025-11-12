import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';

export const revalidate = 0;

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full font-sans'>
      <div className='w-full max-w-3xl px-6 sm:px-12 md:px-16 py-32'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
