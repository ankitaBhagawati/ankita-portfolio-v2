import About from "@/components/About";
import Approach from "@/components/Approach";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mentoring from "@/components/Mentoring";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />
      <Hero />
      <Approach />
      <About />
      <Work />
      <Mentoring />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </div>
  );
}
