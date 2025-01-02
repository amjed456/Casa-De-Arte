import type { Metadata } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
