import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
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
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>{children}</body>
    </html>
  );
}
