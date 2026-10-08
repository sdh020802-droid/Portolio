import './globals.css';

export const metadata = {
  title: '송다훈 - Portfolio',
  description: 'Game Developer & QA Specialist Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
