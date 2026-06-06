import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat, Dancing_Script, Parisienne, Great_Vibes } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { DelayedScripts } from "@/components/delay-scripts";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dancingScript.variable} ${parisienne.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="icon" href="/image/fyic-logo-cropped.png" type="image/png" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.userway.org" />
        <link rel="preload" href="/image/event.webp" as="image" />
      </head>
      <body className={montserrat.className}>
        <Layout>
          <div className="relative flex min-h-screen flex-col w-full overflow-x-hidden">
            {children}
            <FixedPlugin />
          </div>
        </Layout>

        {/* Analytics Script */}
        <DelayedScripts />

      </body>
    </html>
  );
}
