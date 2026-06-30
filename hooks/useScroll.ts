"use client";

import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollY,setScrollY]=useState(0);
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY>80);
    };
    window.addEventListener("scroll",handleScroll);
    handleScroll();
    return()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  return{
    scrollY,
    isScrolled
  };
}