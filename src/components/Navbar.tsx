import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="flex px-10 p-5 items-center justify-between relative w-full">
      <span className="bg_blend absolute left-0 top-0 size-full opacity-50"></span>
      <div className="flex items-center gap-10 z-[1]">
        <img src={logo} className="size-18" alt="logo" />
        <ul className="flex gap-10 text-xl font-medium">
          <li className="bg-gradient-to-r from-white via-white  to-black to-[130%] text-transparent bg-clip-text inline-block">Services</li>
          <li className="bg-gradient-to-r from-white via-white to-black to-[130%] text-transparent bg-clip-text inline-block">How we work?</li>
          <li className="bg-gradient-to-r from-white via-white to-black to-[130%] text-transparent bg-clip-text inline-block">Portfolio</li>
        </ul>
      </div>
      <button className="bg-white p-2 px-4 rounded-2xl z-[1] h-fit text-black font-medium ">Contact us</button> 
    </nav>
  );
}
