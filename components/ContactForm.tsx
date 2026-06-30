"use client";

import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/email";

export default function ContactForm(){
  const form=useRef<HTMLFormElement>(null);
  const [loading,setLoading]=useState(false);
  const [success,setSuccess]=useState(false);

  async function send(e:React.FormEvent){
    e.preventDefault();
    if(!form.current) return;
    setLoading(true);

    try{
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      );
      setSuccess(true);
      form.current.reset();
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  return(
    <form
      ref={form}
      onSubmit={send}
      className="bg-white rounded-[35px] shadow-2xl p-10">
      <input
        name="name"
        required
        placeholder="Nom complet"
        className="w-full border p-5 rounded-xl mb-5"/>
      <input
        name="email"
        required
        type="email"
        placeholder="Adresse email"
        className="w-full border p-5 rounded-xl mb-5"/>
      <input
        name="phone"
        required
        placeholder="Téléphone"
        className="w-full border p-5 rounded-xl mb-5"/>
      <select
        name="service"
        className="w-full border p-5 rounded-xl mb-5">
        <option>
          Nettoyage
        </option>
        <option>
          Visa Étudiant
        </option>
        <option>
          Visa Tourisme
        </option>
        <option>
          Immigration
        </option>
      </select>
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Votre message"
        className="w-full border p-5 rounded-xl mb-8"/>
      <button
        disabled={loading}
        className="btn btn-primary w-full">
        {loading?"Envoi...":"Envoyer"}
      </button>
      {success && (
        <p className="text-green-600 mt-6">
          Votre message a été envoyé avec succès.
        </p>
      )}
    </form>
  );
}