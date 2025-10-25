import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://griffinmahoney.me'),
  title: {
    default: "Griffin Mahoney",
    template: "%s | Griffin Mahoney"
  },
  description: "Professional portfolio of Griffin Mahoney, a Software Engineer and Technology Leader. This site contains both a resume and a portfolio of my projects.",
  keywords: ['Griffin Mahoney', 'Software Engineer', 'Technology Leader', 'Portfolio', 'Resume', 'Web Development'],
  authors: [{ name: 'Griffin Mahoney' }],
  creator: 'Griffin Mahoney',
  publisher: 'Griffin Mahoney',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://griffinmahoney.me',
    siteName: 'Griffin Mahoney Portfolio',
    title: 'Griffin Mahoney',
    description: 'Professional portfolio of Griffin Mahoney, a Software Engineer and Technology Leader. This site contains both a resume and a portfolio of my projects.',
    images: [
      {
        url: '/og-image.png', // You may want to create this image
        width: 1200,
        height: 630,
        alt: 'Griffin Mahoney Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://griffinmahoney.me',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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

