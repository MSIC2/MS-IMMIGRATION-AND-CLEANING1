import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MS Immigration and Cleaning (MSIC)",
  description:
    "Entreprise spécialisée en Nettoyage Professionnel, Immigration, Études à l'étranger et Assistance Visa.",

  keywords: [
    "MSIC",
    "MS Immigration",
    "Nettoyage",
    "Cleaning",
    "Visa",
    "Canada",
    "France",
    "USA",
    "Schengen",
    "Porto-Novo",
    "Bénin"
  ],

  authors: [
    {
      name: "MS Immigration and Cleaning"
    }
  ],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },

  openGraph: {
    title: "MS Immigration and Cleaning",
    description:
      "Nettoyage Professionnel • Immigration • Visa Étudiant • Visa Tourisme",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">

      <body className={poppins.className}>

        {children}

      </body>

    </html>
  );
}