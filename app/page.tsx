import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mentoring from "@/components/Mentoring";
import Published from "@/components/Published";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />
      <Hero />
      <About />
      <Mentoring />
      <Published />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
