import Link from "next/link";
import { Menu, X } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-white z-40 shadow-lg">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          MS Immigration
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-secondary duration-300">Accueil</Link>
          <Link href="#services" className="hover:text-secondary duration-300">Services</Link>
          <Link href="#contact" className="hover:text-secondary duration-300">Contact</Link>
        </nav>
        <SocialLinks />
      </div>
    </header>
  );
}