"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Nettoyage Résidentiel",
      description: "Services de nettoyage complets pour vos maisons et appartements",
      icon: "🏠"
    },
    {
      title: "Nettoyage Commercial",
      description: "Solutions de nettoyage professionnelles pour vos bureaux",
      icon: "🏢"
    },
    {
      title: "Visa Étudiant",
      description: "Assistance complète pour vos demandes de visa étudiant",
      icon: "📚"
    },
    {
      title: "Visa Tourisme",
      description: "Services de visa pour vos voyages touristiques",
      icon: "✈️"
    }
  ];

  return (
    <Section id="services" className="bg-gray-50">
      <motion.div {...fadeUp} className="text-center mb-16">
        <Badge title="Nos services" />
        <h2 className="text-5xl font-bold text-primary mt-6 mb-6">Ce que nous offrons</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des services professionnels adaptés à vos besoins</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}