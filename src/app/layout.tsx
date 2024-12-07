import type { Metadata } from "next";
import { Doto } from "next/font/google";

import "./globals.css";

const receiptFont = Doto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "🧑🏽‍💻 Antonio Carlos Filho",
  description: "developer & scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${receiptFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
