import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MS Immigration and Cleaning",
  description: "Services de nettoyage et d'immigration professionnels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}