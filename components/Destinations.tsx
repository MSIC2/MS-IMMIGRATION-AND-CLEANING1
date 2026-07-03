"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const countries=[

{
name:"Canada",
image:"https://images.unsplash.com/photo-1503614472-8c93d56cd8bb?auto=format&fit=crop&w=1200&q=80"
},

{
name:"France",
image:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
},

{
name:"USA",
image:"https://images.unsplash.com/photo-1496588152823-e6f573f1f4b1?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Royaume-Uni",
image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Brésil",
image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
},

{
name:"Schengen",
image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80"
}

];

export default function Destinations(){

return(

<section className="py-28 bg-slate-50">

<div className="container">

<div className="text-center mb-20">

<h2 className="title">

Destinations

</h2>

<p className="subtitle">

Nous vous accompagnons dans vos projets internationaux.

</p>

</div>

<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

{countries.map((country,index)=>(

<motion.div

key={index}

initial={{opacity:0,scale:.9}}

whileInView={{opacity:1,scale:1}}

viewport={{once:true}}

transition={{duration:.5}}

className="relative h-[340px] rounded-[30px] overflow-hidden group shadow-xl">

<Image

src={country.image}

alt={country.name}

fill

className="object-cover group-hover:scale-110 duration-700"

/>

<div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent"/>

<div className="absolute bottom-8 left-8">

<h3 className="text-3xl font-bold text-white">

{country.name}

</h3>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}