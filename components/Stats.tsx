"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Globe2, Clock3 } from "lucide-react";

const stats = [
  {
    icon: <Users size={34} />,
    number: "300+",
    title: "Clients accompagnés",
  },
  {
    icon: <Sparkles size={34} />,
    number: "150+",
    title: "Prestations réalisées",
  },
  {
    icon: <Globe2 size={34} />,
    number: "10+",
    title: "Destinations",
  },
  {
    icon: <Clock3 size={34} />,
    number: "24H",
    title: "Temps de réponse",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="container">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {stats.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .5, delay: index * .15 }}

              className="card text-center p-10"

            >

              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">

                {item.icon}

              </div>

              <h2 className="text-5xl font-extrabold text-primary">

                {item.number}

              </h2>

              <p className="mt-3 text-gray-500">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}