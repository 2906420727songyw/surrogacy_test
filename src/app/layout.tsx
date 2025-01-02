import './styles/globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import AuthProvider from "./components/AuthProvider";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sapling Surrogacy",
  description: "Sapling Surrogacy Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={playfairDisplay.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="root">
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
