import SocialLinks from "@/components/SocialLinks";
import { currentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MS Immigration and Cleaning</h3>
            <p className="text-white/70">Services professionnels de nettoyage et d'immigration</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Accueil</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-white/70">Email: info@msimmigration.com</p>
            <p className="text-white/70">Tél: +229 01 90 72 24 15</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-white/70">&copy; {currentYear()} MS Immigration and Cleaning. Tous droits réservés.</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}