import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Alex Johnson",
  description: "Portfolio and professional resume of Alex Johnson, a Senior Full Stack Developer with 8+ years of experience in React, Node.js, and cloud architecture. Explore projects and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Griffin Mahoney</title>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

