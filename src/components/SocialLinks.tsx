"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="#" className="hover:text-secondary transition-colors">
        <Facebook size={24} />
      </a>
      <a href="#" className="hover:text-secondary transition-colors">
        <Instagram size={24} />
      </a>
      <a href="#" className="hover:text-secondary transition-colors">
        <Linkedin size={24} />
      </a>
    </div>
  );
}