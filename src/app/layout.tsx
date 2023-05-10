import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['300'], subsets: ['latin'] });

export const metadata = {
  title: 'Protein calculator',
  description: 'Calculate the protein amount to cost ratio of foods.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
