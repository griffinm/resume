import type { Metadata } from "next";
import Script from "next/script";
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
  const isProduction = process.env.NODE_ENV === 'production';
  
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-WJB9389JXW"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WJB9389JXW');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}

