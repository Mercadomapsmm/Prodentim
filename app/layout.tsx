import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'ProDentim™ Official | Advanced Oral Microbiome & Dental Support',
  description: 'Official interactive presentation, oral health microbiome quiz, ingredient breakdown, and secure ordering portal for ProDentim.',
  openGraph: {
    title: 'ProDentim™ Official | Advanced Oral Microbiome & Dental Support',
    description: 'Official interactive presentation, oral health microbiome quiz, ingredient breakdown, and secure ordering portal for ProDentim.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProDentim™ Official | Advanced Oral Microbiome & Dental Support',
    description: 'Official interactive presentation, oral health microbiome quiz, ingredient breakdown, and secure ordering portal for ProDentim.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
