import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BootstrapClient from "@/components/BootstrapClient";
import { I18nProvider } from "@/components/I18nProvider";
// Bootstrap solo grid + utilities para no romper el design system de Tailwind
// (se evita bootstrap.min.css completo porque su Reboot pisa los tokens dark/light).
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nezt.io"),
  title: "NEZT — Software, Automatización & IA Aplicada",
  description:
    "NEZT es un estudio de tecnología que construye software, automatización e IA aplicada para empresas ambiciosas. Build. Connect. Scale.",
  icons: {
    icon: "/neztlogo.png",
  },
  keywords: [
    "ingeniería de software",
    "automatización",
    "IA aplicada",
    "plataformas de datos",
    "integración de sistemas",
    "NEZT",
  ],
  openGraph: {
    title: "NEZT — Software, Automatización & IA Aplicada",
    description:
      "Construimos los sistemas que sostienen a las empresas ambiciosas. Software, automatización e IA aplicada diseñados para escalar.",
    type: "website",
    siteName: "NEZT",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEZT — Software, Automatización & IA Aplicada",
    description:
      "Construimos los sistemas que sostienen a las empresas ambiciosas. Build. Connect. Scale.",
  },
};

const themeScript = `(function(){try{var k='nezt-theme';var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:'dark';var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} ${mono.variable} antialiased`}>
        <BootstrapClient />
        <I18nProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
