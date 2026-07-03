"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props{

open:boolean;

setOpen:(value:boolean)=>void;

}

export default function MobileMenu({

open,

setOpen

}:Props){

return(

<AnimatePresence>

{open && (

<motion.div

initial={{x:"100%"}}

animate={{x:0}}

exit={{x:"100%"}}

transition={{duration:.4}}

className="fixed top-0 right-0 w-full h-screen bg-[#0B2E63] z-[999] flex flex-col">

<div className="flex justify-end p-8">

<button onClick={()=>setOpen(false)}>

<X

size={40}

className="text-white"

/>

</button>

</div>

<nav className="flex flex-col items-center gap-10 mt-10 text-white text-2xl font-semibold">

<Link href="/" onClick={()=>setOpen(false)}>Accueil</Link>

<Link href="/cleaning" onClick={()=>setOpen(false)}>Nettoyage</Link>

<Link href="/immigration" onClick={()=>setOpen(false)}>Immigration</Link>

<Link href="/canada" onClick={()=>setOpen(false)}>Études Canada</Link>

<Link href="/tourisme" onClick={()=>setOpen(false)}>Visa Tourisme</Link>

<Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>

<a

href="https://wa.me/2290190722415"

className="mt-6 bg-green-500 px-8 py-4 rounded-full">

WhatsApp

</a>

</nav>

</motion.div>

)}

</AnimatePresence>

);

}