import { useEffect } from "react";
import ideaSvg from "../../assets/icons_idea.svg";
import eyeSvg from "../../assets/flat_eyes.svg";
import logo from "../../assets/logo.svg";
import triangle from "../../assets/bluredTriangle.svg";
import ellipse from "../../assets/bluredEllipse.svg";

const transformations = [
  [
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
  ],
  [
    "translate(-300px,-150px) scale(0.6)",
    "translate(-150px,-50px) scale(0.6)",
    "translate(0px,50px) scale(0.6)",
    "translate(150px,150px) scale(0.6)",
  ],
  [
    "translate(-450px,-300px) scale(0.5)",
    "translate(0px,0px) scale(0.7)",
    "translate(450px,300px) scale(0.5)",
    "translate(500px,350px) scale(0.5)",
  ],
  [
    "translate(-450px,-300px) scale(0.5)",
    "translate(-400px,-250px) scale(0.5)",
    "translate(0px,0px) scale(0.7)",
    "translate(500px,350px) scale(0.5)",
  ],
  [
    "translate(-450px,-300px) scale(0.5)",
    "translate(-400px,-250px) scale(0.5)",
    "translate(-350px,-200px) scale(0.5)",
    "translate(50px,0px) scale(0.7)",
  ],
];
const transformationsMobile = [
  [
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
    "translate(0px,-0px) scale(1)",
  ],
  [
    "translate(-50px,-100px) scale(0.6)",
    "translate(0px,0px) scale(0.6)",
    "translate(30px,100px) scale(0.6)",
    "translate(60px,200px) scale(0.6)",
  ],
  [
    "translate(-250px,-200px) scale(0.5)",
    "translate(0px,0px) scale(0.7)",
    "translate(200px,200px) scale(0.5)",
    "translate(250px,250px) scale(0.5)",
  ],
  [
    "translate(-250px,-200px) scale(0.5)",
    "translate(-220px,-170px) scale(0.5)",
    "translate(0px,0px) scale(0.7)",
    "translate(200px,200px) scale(0.5)",
  ],
  [
    "translate(-250px,-200px) scale(0.5)",
    "translate(-220px,-170px) scale(0.5)",
    "translate(-200px,-150px) scale(0.5)",
    "translate(0px,50px) scale(0.7)",
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
      if (window.innerWidth < 460) {
        if (index >= 0 && index < transformationsMobile.length) {
          cards.forEach((card, i) => {
            (card as HTMLElement).style.transform =
              transformationsMobile[index][i] || "";
          });
        }
      } else {
        // Apply/remove the "away" class based on scroll position
        if (index >= 0 && index < transformations.length) {
          cards.forEach((card, i) => {
            (card as HTMLElement).style.transform =
              transformations[index][i] || "";
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="over relative flex h-[400vh] w-full" id="process">
      <span className="bg_blend absolute left-0 top-0 size-full"></span>
      <div className="stack-area size-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black pb-20 pt-10 max-lg:left-[calc(50%-15rem)] max-lg:top-[calc(50%-15rem)] max-lg:size-[30rem] max-sm:left-[calc(50%-13rem)] max-sm:top-[calc(50%-13rem)] max-sm:size-[26rem]">
            <img src={ellipse} className="absolute top-0 z-[-1]" />
            <h4 className="relative text-3xl font-medium text-white max-lg:text-2xl max-sm:text-xl">
              From Vision to Success
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white max-lg:text-6xl max-sm:text-5xl">
              <p>From</p>
              <p>Idea</p>
              <img src={ideaSvg} className="size-[5rem]" />
              <p>to</p>
              <p>Impact</p>
            </div>
            <p className="text-3xl font-medium text-white max-sm:text-2xl">
              Our Seamless Process
            </p>
            <img src={triangle} className="absolute bottom-0 z-[-1]" />
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black pb-20 pt-10 max-lg:left-[calc(50%-15rem)] max-lg:top-[calc(50%-15rem)] max-lg:size-[30rem] max-sm:left-[calc(50%-13rem)] max-sm:top-[calc(50%-13rem)] max-sm:size-[26rem]">
            <img src={ellipse} className="absolute top-0 z-[-1]" />
            <img src={triangle} className="absolute bottom-0 z-[-1]" />
            <h4 className="relative text-3xl font-medium text-white max-lg:text-2xl max-sm:text-xl">
              Strategry & Design
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white max-lg:text-6xl max-sm:text-5xl">
              <p>Crafting the</p>
              <p>Vision</p>
              <img src={eyeSvg} className="size-[5rem]" />
            </div>
            <p className="text-center text-3xl font-medium text-white max-sm:text-2xl">
              Design with purpose, build with vision.
            </p>
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black pb-20 pt-10 max-lg:left-[calc(50%-15rem)] max-lg:top-[calc(50%-15rem)] max-lg:size-[30rem] max-sm:left-[calc(50%-13rem)] max-sm:top-[calc(50%-13rem)] max-sm:size-[26rem]">
            <img src={ellipse} className="absolute top-0 z-[-1]" />
            <img src={triangle} className="absolute bottom-0 z-[-1]" />
            <h4 className="relative text-3xl font-medium text-white max-lg:text-2xl max-sm:text-xl">
              Development & Testing
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-7xl font-medium text-white max-lg:text-6xl max-sm:text-5xl">
              <p>Bringing</p>
              <p>Ideas</p>
              <p>to Life</p>
              <img src={logo} className="size-[5rem]" />
            </div>
            <p className="text-center text-3xl font-medium text-white max-sm:text-2xl">
              Seamless development, flowless execution
            </p>
          </div>
          <div className="card absolute left-[calc(50%-20rem)] top-[calc(50%-20rem)] flex size-[40rem] flex-col items-center justify-between overflow-hidden rounded-3xl bg-black pb-20 pt-10 max-lg:left-[calc(50%-15rem)] max-lg:top-[calc(50%-15rem)] max-lg:size-[30rem] max-sm:left-[calc(50%-13rem)] max-sm:top-[calc(50%-13rem)] max-sm:size-[26rem]">
            <img src={ellipse} className="absolute top-0 z-[-1]" />
            <img src={triangle} className="absolute bottom-0 z-[-1]" />
            <h4 className="relative text-3xl font-medium text-white max-lg:text-2xl max-sm:text-xl">
              Launch & Support
            </h4>
            <div className="text-center text-7xl font-medium text-white max-lg:text-6xl max-sm:text-5xl">
              Launch, Grow, Evolve 🚀
            </div>
            <p className="text-center text-3xl font-medium text-white max-sm:text-2xl">
              Seamless development, flawless execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
