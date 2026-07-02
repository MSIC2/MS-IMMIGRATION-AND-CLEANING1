"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#081C3A] text-white z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">MS Immigration</h1>
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="hover:text-[#FF6B35] duration-300">Accueil</Link>
            <Link href="#services" className="hover:text-[#FF6B35] duration-300">Services</Link>
            <Link href="#contact" className="hover:text-[#FF6B35] duration-300">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#081C3A] to-[#FF6B35]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Nettoyage & Immigration<br/>
            <span className="text-[#FF6B35]">de Qualité</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Services professionnels pour vos besoins de nettoyage et d'immigration
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold bg-[#081C3A] text-white hover:bg-[#FF6B35] transition-all duration-300 text-lg"
            >
              Nous contacter
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 rounded-lg font-semibold bg-[#FF6B35] text-white hover:bg-[#081C3A] transition-all duration-300 text-lg"
            >
              Découvrir
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FF6B35]/20 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold">Nos services</span>
            <h2 className="text-5xl font-bold text-[#081C3A] mt-6 mb-6">Ce que nous offrons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des services professionnels adaptés à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Nettoyage Résidentiel", description: "Services de nettoyage complets pour vos maisons", icon: "🏠" },
              { title: "Nettoyage Commercial", description: "Solutions pour vos bureaux et locaux", icon: "🏢" },
              { title: "Visa Étudiant", description: "Assistance pour vos demandes d'études", icon: "📚" },
              { title: "Visa Tourisme", description: "Services pour vos voyages touristiques", icon: "✈️" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#081C3A] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FF6B35]/20 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold">Nos tarifs</span>
            <h2 className="text-5xl font-bold text-[#081C3A] mt-6 mb-6">Tarification transparente</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des prix compétitifs et adaptés à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Nettoyage basique", price: "À partir de 25,000 FCFA" },
              { title: "Nettoyage Premium", price: "À partir de 50,000 FCFA" },
              { title: "Visa Étudiant", price: "À partir de 150,000 FCFA" },
              { title: "Visa Tourisme", price: "À partir de 100,000 FCFA" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl duration-300">
                <h3 className="text-xl font-bold text-[#081C3A] mb-4">{item.title}</h3>
                <p className="text-3xl font-bold text-[#FF6B35] mb-6">{item.price}</p>
                <button className="w-full px-8 py-3 rounded-lg font-semibold bg-[#081C3A] text-white hover:bg-[#FF6B35] transition-all duration-300">
                  Demander
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block bg-[#FF6B35]/20 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold">Nous contacter</span>
              <h2 className="text-5xl font-bold text-[#081C3A] mt-6 mb-6">Parlons de vos besoins</h2>
              <p className="text-gray-600 text-lg mb-8">Contactez-nous pour discuter de vos projets de nettoyage ou d'immigration.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#081C3A] mb-2">📍 Adresse</h4>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#081C3A] mb-2">📧 Email</h4>
                  <p className="text-gray-600">info@msimmigration.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#081C3A] mb-2">📱 Téléphone</h4>
                  <p className="text-gray-600">+229 01 90 72 24 15</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" placeholder="+229 01 90 72 24 15" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-3 rounded-lg font-semibold bg-[#081C3A] text-white hover:bg-[#FF6B35] transition-all duration-300 text-lg">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#081C3A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MS Immigration and Cleaning</h3>
              <p className="text-white/70">Services professionnels de nettoyage et d'immigration</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="#" className="hover:text-white">Accueil</Link></li>
                <li><Link href="#services" className="hover:text-white">Services</Link></li>
                <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/70">Email: info@msimmigration.com</p>
              <p className="text-white/70">Tél: +229 01 90 72 24 15</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 text-center">&copy; 2026 MS Immigration and Cleaning. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/22901907224"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}