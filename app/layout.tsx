import type { Metadata } from "next";
import { Inter, Space_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Casa De Arte",
  description: "Art Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/Casa-De-Arte/" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
