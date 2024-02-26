import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Facebook NextJS',
  description: 'Facebook nextjs tailwind shadcn/ui',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-[#F0F2F5]`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
