import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Griffin Mahoney",
    template: "%s | Griffin Mahoney"
  },
  description: "Professional portfolio of Griffin Mahoney, a Software Engineer and Technology Leader. This site contains both a resume and a portfolio of my projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

