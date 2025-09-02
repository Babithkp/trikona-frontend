import BuiltSection from "@/components/Landing/BuiltSection";
import ContactForm from "@/components/Landing/ContactForm";
import HeroSection from "@/components/Landing/HeroSection";
import ShowcaseSection from "@/components/Landing/ShowcaseSection";
import Works from "@/components/Landing/Works";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Works />
      <BuiltSection/>
      <ShowcaseSection/>
      <ContactForm/>
    </main>
  );
}
