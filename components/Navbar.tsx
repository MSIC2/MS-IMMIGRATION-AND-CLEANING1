"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

const [open,setOpen]=useState(false);

const [scroll,setScroll]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScroll(window.scrollY>40);

}

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

return(

<>

<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
scroll
? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
: "bg-transparent py-5"
}`}>

<div className="container flex items-center justify-between">

<Link href="/" className="flex items-center gap-3">

<Image

src="/logo.png"

alt="MSIC"

width={65}

height={65}

priority

/>

<div>

<h1 className={`font-bold text-lg ${scroll ? "text-primary":"text-white"}`}>

MS Immigration

</h1>

<p className={`text-sm ${scroll?"text-gray-500":"text-gray-200"}`}>

& Cleaning

</p>

</div>

</Link>

<nav className="hidden lg:flex items-center gap-9">

<Link href="/" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Accueil

</Link>

<Link href="/cleaning" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Nettoyage

</Link>

<Link href="/immigration" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Immigration

</Link>

<Link href="/canada" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Canada

</Link>

<Link href="/tourisme" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Tourisme

</Link>

<Link href="/contact" className={`${scroll?"text-slate-700":"text-white"} hover:text-secondary transition`}>

Contact

</Link>

</nav>

<div className="hidden lg:flex items-center gap-4">

<a

href="tel:+2290197191181"

className={`flex items-center gap-2 ${scroll?"text-slate-700":"text-white"}`}>

<Phone size={18}/>

</a>

<a

href="https://wa.me/2290190722415"

target="_blank"

className="bg-green-500 hover:bg-green-600 transition text-white rounded-full p-3">

<MessageCircle size={20}/>

</a>

<a

href="/contact"

className="btn btn-primary">

Demander un devis

</a>

</div>

<button

className={`lg:hidden ${scroll?"text-primary":"text-white"}`}

onClick={()=>setOpen(true)}>

<Menu size={34}/>

</button>

</div>

</header>

<MobileMenu open={open} setOpen={setOpen}/>

</>

);

}