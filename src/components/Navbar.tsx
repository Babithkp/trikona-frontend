import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="flex px-10 p-5 items-center justify-between relative w-full max-sm:p-2">
      <span className="bg_blend absolute left-0 top-0 size-full opacity-50"></span>
      <div className="flex items-center gap-10 z-[1] ">
        <img src={logo} className="size-18" alt="logo" />
        <div className="flex gap-10 text-xl font-medium max-lg:text-base">
          <a href="/#services" className="bg-gradient-to-r from-white via-white  to-black to-[130%] text-transparent bg-clip-text inline-block">Services</a>
          <a href="/#process" className="bg-gradient-to-r from-white via-white to-black to-[130%] text-transparent bg-clip-text inline-block">How we work?</a>
        </div>
      </div>
      <a href="#contactus" className="bg-white p-2 px-4 rounded-2xl z-[1] h-fit text-black font-medium ">Contact us</a> 
    </nav>
  );
}
