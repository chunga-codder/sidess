import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sidess-luxury-shop.com"),
  
  title: {
    template: "%s | sidess luxury shop - Haute Parfumerie Cameroun",
    default: "sidess luxury shop | Haute Parfumerie & Fragrances d'Exception",
  },
  
  description: "Découvrez sidess luxury shop, la référence en parfumerie de luxe au Cameroun. Achetez des parfums authentiques, extraits de parfum et fragrances d'exception. Livraison à Buea, Douala, Yaoundé.",
  
  keywords: [
    // Brand & Identity
    "sidess luxury shop",
    "sidess perfumes Cameroon",
    "sidess perfume Buea",
    "sidess luxury fragrance",
    
    // French Keywords
    "parfumerie de luxe Cameroun",
    "parfumerie de luxe Buea",
    "parfums de luxe Cameroun",
    "parfums de niche Cameroun",
    "acheter parfum Buea",
    "acheter parfum Cameroun",
    "acheter parfum original Cameroun",
    "parfum original Cameroun",
    "parfum homme luxe",
    "parfum femme luxe",
    "meilleur parfum homme",
    "meilleur parfum femme",
    "parfum longue tenue Cameroun",
    "parfum qui dure longtemps",
    "parfum authentique Cameroun",
    "parfum de marque Cameroun",
    "fragrance d'exception Cameroun",
    "parfum sur mesure Buea",
    "extrait de parfum Cameroun",
    "eau de parfum luxe",
    "parfum intense Cameroun",
    "parfum élégant homme",
    "parfum sensuel femme",
    "cadeau parfum Cameroun",
    "coffret parfum luxe",
    "parfum de créateur Cameroun",
    "parfum artisanal Buea",
    "parfumerie fine Cameroun",
    "haute parfumerie Buea",
    "fragrance premium Cameroun",
    "parfum luxe Douala",
    "parfum luxe Yaoundé",
    "livraison parfum Cameroun",
    "parfum haut de gamme",
    "parfum pour cadeau Cameroun",
    "parfum pour mariage",
    "parfum pour anniversaire",
    "parfum oriental Cameroun",
    "parfum boisé luxe",
    "parfum floral femme",
    "parfum gourmand",
    "parfum frais homme",
    "parfum musqué",
    "parfum vanille",
    "parfum oud Cameroun",
    "parfum ambré",
    "parfum pas cher Cameroun",
    
    // English Keywords
    "luxury perfume Buea",
    "luxury perfumes Cameroon",
    "buy perfume online Cameroon",
    "buy original perfume Cameroon",
    "authentic perfumes Cameroon",
    "original perfumes Cameroon",
    "designer perfumes Cameroon",
    "best men's perfume Cameroon",
    "best women's perfume Cameroon",
    "best perfume for men",
    "best perfume for women",
    "long lasting perfume Cameroon",
    "long lasting fragrance",
    "premium perfumes Cameroon",
    "luxury fragrance Cameroon",
    "niche fragrances Cameroon",
    "exclusive perfumes Cameroon",
    "signature scent Cameroon",
    "fine fragrance Cameroon",
    "haute perfumery Buea",
    "fragrance boutique Cameroon",
    "perfume boutique Cameroon",
    "perfume shop Buea",
    "perfume shop Cameroon",
    "perfume store Cameroon",
    "online perfume shop Cameroon",
    "perfume delivery Cameroon",
    "gift perfumes Cameroon",
    "perfume gift set Cameroon",
    "luxury scent Cameroon",
    "perfume collection Cameroon",
    "premium fragrance Cameroon",
    "fragrance for men",
    "fragrance for women",
    "unisex fragrance Cameroon",
    "oud perfume Cameroon",
    "arabian perfume Cameroon",
    "floral perfume Cameroon",
    "woody fragrance Cameroon",
    "fresh fragrance Cameroon",
    "vanilla perfume Cameroon",
    "amber perfume Cameroon",
    "musk perfume Cameroon",
    "perfume for weddings Cameroon",
    "birthday gift perfume Cameroon",
    
    // Local SEO - Buea
    "perfume shop in Buea",
    "best perfume shop in Buea",
    "buy perfume in Buea",
    "perfume delivery Buea",
    "parfumerie Buea",
    "parfum Buea Cameroun",
    
    // Local SEO - Douala
    "perfume shop Douala",
    "buy perfume in Douala",
    "perfume delivery Douala",
    "parfumerie Douala",
    "parfum Douala Cameroun",
    
    // Local SEO - Yaoundé
    "perfume shop Yaoundé",
    "buy perfume in Yaoundé",
    "perfume delivery Yaoundé",
    "parfumerie Yaoundé",
    "parfum Yaoundé Cameroun",
    
    // Local SEO - General
    "best perfume shop Cameroon",
    "original perfumes in Cameroon",
    "perfume store Cameroon",
    "authentic perfumes Cameroon",
    "luxury perfumes Cameroon",
    
    // Brand Names (Only if you stock them)
    "Dior perfume Cameroon",
    "Chanel perfume Cameroon",
    "Tom Ford perfume Cameroon",
    "Creed perfume Cameroon",
    "Yves Saint Laurent Cameroon",
    "Jean Paul Gaultier Cameroon",
    "Paco Rabanne Cameroon",
    "Armani perfume Cameroon",
    "Versace perfume Cameroon",
    "Lattafa perfumes Cameroon",
    "Maison Alhambra Cameroon",
    "Afnan perfumes Cameroon",
    "Armaf perfumes Cameroon",
    "Swiss Arabian Cameroon",
    "Rasasi perfumes Cameroon",
    "Ajmal perfumes Cameroon"
  ],
  
  authors: [{ name: "sidess luxury shop" }],
  creator: "sidess luxury shop",
  publisher: "sidess luxury shop",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  openGraph: {
    title: "sidess luxury shop | Haute Parfumerie & Fragrances d'Exception",
    description: "Découvrez sidess luxury shop, la référence en parfumerie de luxe au Cameroun. Achetez des parfums authentiques et fragrances d'exception. Livraison à Buea, Douala, Yaoundé.",
    url: "https://sidess-luxury-shop.com",
    siteName: "sidess luxury shop",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://sidess-luxury-shop.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "sidess luxury shop - Haute Parfumerie Cameroun",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "sidess luxury shop | Haute Parfumerie & Fragrances d'Exception",
    description: "Découvrez sidess luxury shop, la référence en parfumerie de luxe au Cameroun. Achetez des parfums authentiques. Livraison à Buea, Douala, Yaoundé.",
    images: ["https://sidess-luxury-shop.com/og-image.jpg"],
  },
  
  alternates: {
    canonical: "https://sidess-luxury-shop.com",
  },
  
  category: "perfume",
  classification: "Parfumerie de Luxe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-neutral-900 selection:text-[#e21e26]">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-M5HTBJCLNR" />
    </html>
  );
}