import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Alexander Mendoza - Portfolio',
  description: 'Portfolio of Alexander Mendoza, a full-stack developer learning Next.js and React.'
};

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      );
}