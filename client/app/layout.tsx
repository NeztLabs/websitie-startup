import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nezt.io"),
  title: "NEZT — Software, Automation & Applied AI",
  description:
    "NEZT is a technology studio engineering software, automation, and applied AI for ambitious companies. Build. Connect. Scale.",
  keywords: [
    "software engineering",
    "automation",
    "applied AI",
    "data platforms",
    "systems integration",
    "NEZT",
  ],
  openGraph: {
    title: "NEZT — Software, Automation & Applied AI",
    description:
      "We build the systems behind ambitious companies. Software, automation, and applied AI engineered to scale.",
    type: "website",
    siteName: "NEZT",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEZT — Software, Automation & Applied AI",
    description:
      "We build the systems behind ambitious companies. Build. Connect. Scale.",
  },
};

const themeScript = `(function(){try{var k='nezt-theme';var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:'dark';var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${orbitron.variable} ${inter.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
