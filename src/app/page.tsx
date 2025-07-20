import Footer from "@/components/Footer";
import BuiltSection from "@/components/Landing/BuiltSection";
import ContactForm from "@/components/Landing/ContactForm";
import HeroSection from "@/components/Landing/HeroSection";
import ShowcaseSection from "@/components/Landing/ShowcaseSection";
import Works from "@/components/Landing/Works";

export default function Home() {
  return (
    <main className="px-5 bg-[#F5F5F5] pb-10">
      <HeroSection />
      <Works />
      <BuiltSection/>
      <ShowcaseSection/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
