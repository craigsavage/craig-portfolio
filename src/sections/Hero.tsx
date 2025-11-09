export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
      <h1 className='text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl'>
        Hey, I&apos;m Craig!
      </h1>
      <p className='max-w-xl text-lg text-zinc-700 dark:text-zinc-300'>
        Senior software engineer specializing in building exceptional digital
        experiences.
      </p>

      <div className='mt-4 flex gap-4'>
        <a
          href='#projects'
          className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
        >
          View My Work
        </a>
        <a
          href='#contact'
          className='rounded-md border border-zinc-300 px-4 py-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
