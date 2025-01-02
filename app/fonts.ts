import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    }
  ],
  variable: "--font-geist-sans",
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

export const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMonoVF.woff',
      weight: '100 900',
      style: 'normal',
    }
  ],
  variable: "--font-geist-mono",
  display: 'swap',
  fallback: ['monospace'],
  adjustFontFallback: false,
}); 