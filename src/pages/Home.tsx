import ContactUs from "../components/Home/ContactUs";
import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process";
import Quote from "../components/Home/Quote";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <main className="max-w-[1500px] ">
      <Hero />
      <Services />
      <Quote />
      <Process/>
      <ContactUs/>
    </main>
  );
}
