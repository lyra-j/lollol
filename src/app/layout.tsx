import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  title: 'LoLLoL Next.js App',
  description: 'Riot Games API를 활용한 LoL 정보 웹 앱입니다.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.variable} font-pretendard`}>
        <Header />
        <main className="flex flex-grow items-center w-full p-8 max-w-[1200px] mx-auto relative min-h-[calc(100vh-140px)] box-border text-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
