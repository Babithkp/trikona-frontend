import ContactForm from "@/components/Landing/ContactForm";
import HeroSection from "@/components/process/HeroSection";
import ProcessCards from "@/components/process/ProcessCards";

export default function page() {
  return (
    <main>
        <HeroSection/>
        <ProcessCards/>
        <ContactForm/>
    </main>
  )
}
