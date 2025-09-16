import Faq from "@/components/Faq";
import HeroSection from "@/components/process/HeroSection";
import ProcessCards from "@/components/process/ProcessCards";
import RedirectToContact from "@/components/RedirectToContact";

export default function page() {
  return (
    <main>
      <HeroSection />
      <ProcessCards />
      <Faq />
      <RedirectToContact />
    </main>
  );
}
