import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import { Goldman } from 'next/font/google';

const fontFamily = Goldman({ weight: ['400'], subsets: ['latin'] });

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
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className={fontFamily.className}>
        <div className="wrapper">
          <Header />

          <main className="main">
            <div className="shell">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
