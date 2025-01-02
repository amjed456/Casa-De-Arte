import localFont from "next/font/local";

export const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: "--font-geist-sans",
  preload: true,
  display: 'block',  // Only affects font loading behavior
});

export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: "--font-geist-mono",
  preload: true,
  display: 'block',  // Only affects font loading behavior
}); 