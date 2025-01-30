import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Noto_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABDULHAMEED",
  description: "FULL STACK DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-[#FFF6ED] */}
      <body className={`${montserrat.variable} antialiased bg-black `}>
        {children}
      </body>
    </html>
  );
}
