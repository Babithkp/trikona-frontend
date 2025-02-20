import xixuSvg from "../../assets/uiux_svg.svg";
import fontendSvg from "../../assets/Frontend_svg.svg";
import backendSvg from "../../assets/backend.svg";
import cloudSvg from "../../assets/Cloud_svg.svg";
import triangle from "../../assets/bluredTriangle.svg"

const services = [
  {
    icon: xixuSvg,
    title: "UI/UX DESIGN",
    description:
      "We craft intuitive and visually engaging user experiences that enhance usability and interaction. Our design process focuses on user research, wireframing, prototyping, and testing to create seamless digital experiences that drive engagement and satisfaction.",
  },
  {
    icon: fontendSvg,
    title: "Frontend Dev",
    description:
      " Our frontend development ensures seamless user experiences with clean code, intuitive navigation, and optimized performance. Whether it’s a website, web app, or interactive UI, we bring designs to life with precision and efficiency.",
  },
  {
    icon: backendSvg,
    title: "Backend Dev",
    description:
      "Secure, scalable, and high-performance backend solutions that power applications. Expertise in API development, database management, and server-side logic to ensure seamless functionality and data integrity. Robust architectures tailored for efficiency and growth.",
  },
  {
    icon: backendSvg,
    title: "AI Models",
    description:
      "Leveraging AI to develop intelligent models for automation, predictions, and data-driven insights. Enhancing efficiency with machine learning, NLP, and computer vision solutions.",
  },
  {
    icon: cloudSvg,
    title: "Cloud Solutions",
    description:
      "Optimizing infrastructure with cloud computing services, ensuring scalability, security, and cost efficiency. Expertise in AWS, Azure, and Google Cloud.",
  },
];

export default function Services() {
  return (
    <section className="relative flex w-full flex-wrap justify-center gap-20 px-20 py-20">
      <span className="bg_blend absolute left-0 top-0 size-full"></span>
      {services.map((card, index) => (
        <div
          className="relative flex h-[20rem] w-[24rem] flex-col items-center justify-evenly overflow-hidden rounded-2xl bg-black p-2 px-[2.5rem] text-center shadow-lg"
          key={index}
        >
          <div className="">
            <img src={card.icon} alt="uiuxdesign" className="size-[4rem]" />
            <span className="card_bg absolute -top-[17rem] left-[calc(50%-10rem)] size-[20rem] opacity-[0.7]"></span>
          </div>

          <p className="text-2xl font-semibold">{card.title}</p>
          <p className="text-secondary ">{card.description}</p>
          {/* <span className="absolute left-1 top-0 size-full pt-[45rem] opacity-0 transition-all duration-500 hover:bg-[radial-gradient(circle_at_center,_#FF6B1C_20%,_rgba(255,165,0,0)_60%)] hover:opacity-[0.6]"></span> */}
          <img src={triangle} className="absolute bottom-0 opacity-0  hover:opacity-[0.6] blur-xl transition-all duration-500" />
        </div>
      ))}
    </section>
  );
}
