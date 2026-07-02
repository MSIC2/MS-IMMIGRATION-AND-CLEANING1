"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary/30 -z-10"/>
      
      <div className="container text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Nettoyage & Immigration<br/>
            <span className="text-secondary">de Qualité</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Services professionnels pour vos besoins de nettoyage et d'immigration
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link
              href="#contact"
              className="btn btn-primary text-lg"
            >
              Nous contacter
            </Link>
            <Link
              href="#services"
              className="btn btn-secondary text-lg"
            >
              Découvrir
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}