import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Dancing_Script, Parisienne, Great_Vibes } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing-script",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-parisienne",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "FYIC 2025: First Year Integration Conference 2025",
  description:
    "FYIC 2025: Empowering the Next Generation of Engineers. Join us for Ontario's premier leadership and integration conference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dancingScript.variable} ${parisienne.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="preload" href="/image/event.png" as="image" />
      </head>
      <body className={montserrat.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>

        {/* Analytics Script */}
        <Script
          data-site="https://2025-fyic.vercel.app/"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
          strategy="afterInteractive"
        />

        {/* Userway Accessibility Widget */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="7EpVmNijkz"
          strategy="lazyOnload"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
