'use client';

import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: React.ReactNode;
};

/**
 * A provider component that wraps the application in a ThemeProvider.
 * It allows the application to use the system theme (light or dark) and
 * disables the transition animation when the theme changes.
 *
 * @param children - The children components to render.
 * @returns The ThemeProvider wrapping the children components.
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
