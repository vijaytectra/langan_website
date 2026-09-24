import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blaise Langan DO | Specialized Care for Recovery',
  description: 'Board Certified Doctor of Osteopathic Medicine specializing in specialized recovery, orthopedic rehabilitation, and osteopathic manipulative treatment.',
  keywords: ['Blaise Langan DO', 'Osteopathic Doctor', 'Recovery Care', 'Orthopedic Rehabilitation', 'OMT Therapy', 'Sports Medicine'],
  authors: [{ name: 'Dr. Blaise Langan DO' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,400;0,500;0,700;1,400&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-neutral-900 selection:bg-teal-500 selection:text-white font-jakarta">
        {children}
      </body>
    </html>
  );
}
