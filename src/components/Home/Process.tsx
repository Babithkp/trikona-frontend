import { useEffect } from "react";
import ideaSvg from "../../assets/icons_idea.svg";
import eyeSvg from "../../assets/flat_eyes.svg";
import logo from "../../assets/logo.svg";

const transformations = [
  [
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
  ],
  [
    "translate(-300px,-150px) scale(0.7)",
    "translate(-150px,-50px) scale(0.7)",
    "translate(0px,50px) scale(0.7)",
    "translate(150px,150px) scale(0.7)",
  ],
  [
    "translate(-500px,-450px) scale(0.7)",
    "translate(0px,0px) scale(0.7)",
    "translate(500px,450px) scale(0.7)",
    "translate(550px,500px) scale(0.7)",
  ],
  [
    "translate(-500px,-450px) scale(0.7)",
    "translate(-450px,-400px) scale(0.7)",
    "translate(0px,0px) scale(0.7)",
    "translate(500px,450px) scale(0.7)",
  ],
  [
    "translate(-500px,-450px) scale(0.7)",
    "translate(-450px,-400px) scale(0.7)",
    "translate(-400px,-350px) scale(0.7)",
    "translate(0px,0px) scale(0.7)",
  ],
];

export default function Process() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const stackArea = document.querySelector(".stack-area");
    if (!stackArea) return;

    cards.forEach((card, index) => {
      if (card instanceof HTMLElement) {
        card.style.zIndex = (cards.length - index).toString();
      }
    });

    const handleScroll = () => {
      const distance = window.innerHeight / 2;
      const topVal = stackArea.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));
      // Apply/remove the "away" class based on scroll position
      if (index >= 0 && index < transformations.length) {
        cards.forEach((card, i) => {
          (card as HTMLElement).style.transform =
            transformations[index][i] || "";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex h-[400vh] w-full">
      <span className="bg_blend absolute left-0 top-0 size-full"></span>
      <div className="stack-area size-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black py-20">
            <h4 className="relative text-3xl font-medium text-white">
              From Vision to Success
              <span className="card_bg absolute -top-[17rem] left-[calc(50%-10rem)] size-[20rem] opacity-[0.7]"></span>
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white">
              <p>From</p>
              <p>Idea</p>
              <img src={ideaSvg} className="size-[5rem]" />
              <p>to</p>
              <p>Impact</p>
            </div>
            <p className="text-3xl font-medium text-white">
              Our Seamless Process
            </p>
            <span
              className="absolute top-60 size-full pt-[50rem] opacity-60 transition-all duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, #FF6B1C 30%, rgba(255,165,0,0) 80%)",
              }}
            ></span>
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black py-20">
            <h4 className="relative text-3xl font-medium text-white">
              Strategry & Design
              <span className="card_bg absolute -top-[17rem] left-[calc(50%-10rem)] size-[20rem] opacity-[0.7]"></span>
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white">
              <p>Crafting the</p>
              <p>Vision</p>
              <img src={eyeSvg} className="size-[5rem]" />
            </div>
            <p className="text-3xl font-medium text-white">
              Design with purpose, build with vision.
            </p>
            <span
              className="absolute top-60 size-full pt-[50rem] opacity-60 transition-all duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, #FF6B1C 30%, rgba(255,165,0,0) 80%)",
              }}
            ></span>
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black py-20">
            <h4 className="relative text-3xl font-medium text-white">
              Development & Testing
              <span className="card_bg absolute -top-[17rem] left-[calc(50%-10rem)] size-[20rem] opacity-[0.7]"></span>
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white">
              <p>Bringing</p>
              <p>Ideas</p>
              <p>to Life</p>
              <img src={logo} className="size-[5rem]" />
            </div>
            <p className="text-3xl font-medium text-white">
              Seamless development, flowless execution
            </p>
            <span
              className="absolute top-60 size-full pt-[50rem] opacity-60 transition-all duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, #FF6B1C 30%, rgba(255,165,0,0) 80%)",
              }}
            ></span>
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black py-20">
            <h4 className="relative text-3xl font-medium text-white">
              Launch & Support
              <span className="card_bg absolute -top-[17rem] left-[calc(50%-10rem)] size-[20rem] opacity-[0.7]"></span>
            </h4>
            <div className="text-center text-7xl font-medium text-white">
              Launch, Grow, Evolve 🚀
            </div>
            <p className="text-3xl font-medium text-white">
              Seamless development, flawless execution
            </p>
            <span
              className="absolute top-60 size-full pt-[50rem] opacity-60 transition-all duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, #FF6B1C 30%, rgba(255,165,0,0) 80%)",
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
