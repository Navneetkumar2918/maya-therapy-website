import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About"; 
import OurOffice from "../components/OurOffice";       
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* About */}
      <About />


      {/* Office */}
      <OurOffice />


      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}