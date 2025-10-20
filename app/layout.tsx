import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume App",
  description: "Created with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

