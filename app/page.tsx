import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import FeaturedProject from "@/components/featured-project";
import TravelProject from "@/components/travel-project";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute right-0 top-[500px] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <FeaturedProject />

      <TravelProject />

      <Certificates />

      <Contact />

      <Footer />
    </main>
  );
}