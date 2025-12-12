import React from 'react';
import Link from 'next/link';
import BackgroundContainer from '@/components/common/background-container';

export default function Hero() {
  return (
    <BackgroundContainer>
      <div className="flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-white md:text-7xl lg:text-8xl">Resume Matcher</h1>
        <p className="mt-6 text-lg text-gray-400 md:text-xl max-w-2xl">
          Increase your interview chances with a perfectly tailored resume.
        </p>
        <Link
          href="/resume"
          className="mt-10 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          Get Started
        </Link>
      </div>
    </BackgroundContainer>
  );
}
