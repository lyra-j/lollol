import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Provider from './TQProvider';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'LoLLoL Next.js App',
  description: 'Riot Games API를 활용한 LoL 정보 웹 앱입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.variable} font-pretendard`}>
        <Provider>
          <Header />
          <main className="relative mx-auto box-border flex min-h-[calc(100vh-140px)] w-full max-w-[1200px] flex-grow items-center justify-center p-8 text-center">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
