"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { pricing } from "@/lib/constants";

export default function Pricing() {
  return (
    <Section className="bg-gray-50">
      <motion.div {...fadeUp} className="text-center mb-16">
        <Badge title="Nos tarifs" />
        <h2 className="text-5xl font-bold text-primary mt-6 mb-6">Tarification transparente</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des prix compétitifs et adaptés à vos besoins</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricing.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl duration-300"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
            <p className="text-3xl font-bold text-secondary mb-6">{item.price}</p>
            <Button title="Demander" href="#contact" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}