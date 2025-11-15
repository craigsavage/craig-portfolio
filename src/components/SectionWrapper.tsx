interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

/**
 * A wrapper component for sections that provides consistent styling and structure.
 */
export default function SectionWrapper({
  id,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className='my-16 w-full'>
      {title && <h2 className='mb-4 text-2xl font-bold'>{title}</h2>}
      {children}
    </section>
  );
}
