import './styles/globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { AuthProvider } from "./components/AuthProvider";
import { LanguageProvider } from "./language";
import LanguageWrapper from "./components/LanguageWrapper";

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
  icons: '/favicon.ico'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={playfairDisplay.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <LanguageProvider>
        <LanguageWrapper className={`${geistSans.variable} ${geistMono.variable}`}>
          <AuthProvider>
            <Header />
            <main >{children}</main>
            <Footer />
          </AuthProvider>
        </LanguageWrapper>
      </LanguageProvider>
    </html>
  );
}