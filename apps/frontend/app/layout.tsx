import type { Metadata } from 'next';
import './(default)/css/globals.css';

export const metadata: Metadata = {
  title: 'Resume Matcher',
  description: 'Build your resume with Resume Matcher',
  applicationName: 'Resume Matcher',
  keywords: ['resume', 'matcher', 'job', 'application'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="antialiased bg-white text-gray-900 font-sans">
        <div>{children}</div>
      </body>
    </html>
  );
}
