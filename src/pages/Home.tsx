import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process";
import Quote from "../components/Home/Quote";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Quote />
      <Process/>
    </main>
  );
}
