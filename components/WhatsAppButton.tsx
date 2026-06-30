"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton(){
  return(
    <a
      href="https://wa.me/2290190722415"
      target="_blank"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-110 duration-300 z-50">
      <MessageCircle size={30}/>
    </a>
  );
}