"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div {...fadeUp}>
          <Badge title="Nous contacter" />
          <h2 className="text-5xl font-bold text-primary mt-6 mb-6">Parlons de vos besoins</h2>
          <p className="text-gray-600 text-lg mb-8">Contactez-nous pour discuter de vos projets de nettoyage ou d'immigration. Notre équipe est prête à vous aider.</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary mb-2">📍 Adresse</h4>
              <p className="text-gray-600">Cotonou, Bénin</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">📧 Email</h4>
              <p className="text-gray-600">info@msimmigration.com</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">📱 Téléphone</h4>
              <p className="text-gray-600">+229 01 90 72 24 15</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}