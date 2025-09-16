import Faq from "@/components/Faq";
import BuiltSection from "@/components/Landing/BuiltSection";
import HeroSection from "@/components/Landing/HeroSection";
import ShowcaseSection from "@/components/Landing/ShowcaseSection";
import Works from "@/components/Landing/Works";
import RedirectToContact from "@/components/RedirectToContact";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Works />
      <BuiltSection/>
      <ShowcaseSection/>
      <Faq/>
      <RedirectToContact/>
    </main>
  );
}
