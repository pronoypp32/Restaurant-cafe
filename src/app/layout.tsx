import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella Café - Fine Dining Experience",
  description: "Experience the perfect blend of modern cuisine and timeless elegance at Bella Café. Book your table today for an unforgettable dining experience.",
  keywords: "restaurant, fine dining, café, reservations, gourmet food, Italian cuisine",
  authors: [{ name: "Pronoy Basak" }],
  creator: "Pronoy Basak",
  openGraph: {
    title: "Bella Café - Fine Dining Experience",
    description: "Experience the perfect blend of modern cuisine and timeless elegance",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-16 md:pt-24">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
