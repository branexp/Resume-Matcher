'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * BackgroundContainer Component
 *
 * Provides a full-screen section with a simple dark background.
 * Simplified for performance - removed animated dot patterns.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className] - Optional additional class names for the section element.
 * @param {string} [props.innerClassName] - Optional additional class names for the inner div element.
 * @returns {JSX.Element} The rendered BackgroundContainer component.
 */

interface BackgroundContainerProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

const BackgroundContainer = ({ children, className, innerClassName }: BackgroundContainerProps) => {
  return (
    <section
      className={cn(
        'relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950',
        className
      )}
    >
      <div
        className={cn(
          'relative z-10 flex h-full w-full flex-col items-center justify-center p-8',
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundContainer;
