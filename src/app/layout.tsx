import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Johnson - Senior Full Stack Developer",
  description: "Professional resume of Alex Johnson, a Senior Full Stack Developer with 8+ years of experience in React, Node.js, and cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

