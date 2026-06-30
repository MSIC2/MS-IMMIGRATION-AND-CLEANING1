import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}