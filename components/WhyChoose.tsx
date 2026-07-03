"use client";

import { motion } from "framer-motion";
import {
ShieldCheck,
Sparkles,
Clock3,
BadgeCheck,
Headphones,
Users
} from "lucide-react";

const features = [

{
icon:<ShieldCheck size={34}/>,
title:"Confidentialité",
description:"Toutes vos informations personnelles et vos dossiers sont traités avec la plus grande confidentialité."
},

{
icon:<Sparkles size={34}/>,
title:"Professionnalisme",
description:"Une équipe sérieuse, organisée et soucieuse de la qualité du service."
},

{
icon:<Clock3 size={34}/>,
title:"Rapidité",
description:"Nous répondons rapidement à vos demandes et assurons un suivi permanent."
},

{
icon:<BadgeCheck size={34}/>,
title:"Entreprise enregistrée",
description:"MS Immigration and Cleaning est une entreprise officiellement enregistrée."
},

{
icon:<Headphones size={34}/>,
title:"Support WhatsApp",
description:"Notre équipe reste disponible pour répondre à vos préoccupations."
},

{
icon:<Users size={34}/>,
title:"Accompagnement",
description:"Nous vous accompagnons du début jusqu'à la fin de votre projet."
}

];

export default function WhyChoose(){

return(

<section className="py-28 bg-white">

<div className="container">

<div className="text-center mb-20">

<h2 className="title">

Pourquoi choisir MSIC ?

</h2>

<p className="subtitle max-w-3xl mx-auto">

Votre satisfaction est notre priorité.

</p>

</div>

<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

{features.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.5,delay:index*.08}}

className="card p-10">

<div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8">

{item.icon}

</div>

<h3 className="text-2xl font-bold text-primary">

{item.title}

</h3>

<p className="text-gray-600 mt-5 leading-8">

{item.description}

</p>

</motion.div>

))}

</div>

</div>

</section>

);

}