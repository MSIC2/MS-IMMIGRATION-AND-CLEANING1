"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}

      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
        alt="MSIC"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/95 via-[#0B2E63]/80 to-[#0B2E63]/55" />

      <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 text-white backdrop-blur-xl border border-white/20">

            ⭐ Entreprise enregistrée • IFU • RCCM

          </span>

          <h1 className="mt-8 text-white text-5xl lg:text-7xl font-extrabold leading-tight">

            Votre partenaire de confiance

            <span className="block text-accent">

              Immigration & Nettoyage

            </span>

          </h1>

          <p className="mt-8 text-white/85 text-xl leading-9 max-w-xl">

            Nous accompagnons les particuliers, étudiants,
            familles et entreprises dans leurs projets
            d'immigration et de nettoyage professionnel.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Demander un devis

              <ArrowRight size={20} />

            </a>

            <a
              href="https://wa.me/2290190722415"
              target="_blank"
              className="btn bg-white text-primary hover:bg-accent hover:text-white transition"
            >

              <MessageCircle size={20} />

              WhatsApp

            </a>

          </div>

        </motion.div>

        <motion.div

          initial={{ opacity: 0, x: 120 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="hidden lg:flex justify-center"

        >

          <div className="relative">

            <div className="absolute -inset-5 rounded-full bg-accent blur-3xl opacity-30"></div>

            <Image

              src="/logo.png"

              alt="MSIC"

              width={420}

              height={420}

              priority

              className="relative drop-shadow-2xl"

            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}