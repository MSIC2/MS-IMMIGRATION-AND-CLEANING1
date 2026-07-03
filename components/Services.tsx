"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [

{
title:"Nettoyage Professionnel",

description:"Maisons • Villas • Bureaux • Appartements • Nettoyage complet",

image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",

link:"/cleaning"

},

{
title:"Immigration & Visa",

description:"Canada • France • USA • Schengen • Royaume-Uni • Brésil",

image:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",

link:"/immigration"

}

];

export default function Services(){

return(

<section className="py-28 bg-slate-50">

<div className="container">

<div className="text-center mb-20">

<h2 className="title">

Nos Services

</h2>

<p className="subtitle max-w-3xl mx-auto">

Deux domaines d'expertise.

Une seule exigence : votre satisfaction.

</p>

</div>

<div className="grid lg:grid-cols-2 gap-12">

{services.map((service,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6}}

className="group overflow-hidden rounded-[30px] bg-white shadow-xl">

<div className="relative h-[380px] overflow-hidden">

<Image

src={service.image}

alt={service.title}

fill

className="object-cover group-hover:scale-110 duration-700"

/>

<div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent"/>

</div>

<div className="p-10">

<h3 className="text-3xl font-bold text-primary">

{service.title}

</h3>

<p className="mt-5 text-gray-600 leading-8">

{service.description}

</p>

<a

href={service.link}

className="inline-flex items-center gap-3 mt-8 font-semibold text-secondary hover:gap-5 duration-300">

Découvrir

<ArrowRight size={20}/>

</a>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}