interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

/**
 * A wrapper component for sections that provides consistent styling and structure.
 *
 * @param id - The unique identifier for the section.
 * @param title - An optional title for the section.
 * @param children - The content of the section.
 * @returns A styled section element containing the provided content.
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
