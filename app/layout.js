import { Oswald, Open_Sans, Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const bitter = Bitter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bitter",
  display: "swap",
});

export const metadata = {
  title: "Dr. Nkodia Hardy — Géologie structurale & tectonique",
  description:
    "Site académique du Dr. Nkodia Hardy, enseignant-chercheur en géologie structurale et tectonique à l'Université Marien Ngouabi, Brazzaville, Congo.",
  openGraph: {
    title: "Dr. Nkodia Hardy — Géologie structurale & tectonique",
    description:
      "Site académique du Dr. Nkodia Hardy, enseignant-chercheur en géologie structurale et tectonique à l'Université Marien Ngouabi.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${openSans.variable} ${bitter.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-[100dvh]">
        <LanguageProvider>
          {/* Skip-to-content for keyboard / screen-reader users */}
          <a href="#main-content" className="skip-link">
            Aller au contenu
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
