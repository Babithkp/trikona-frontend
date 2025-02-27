import mailsvg from "../../assets/mail.svg";
import PixelCard from "../PixelCard";
export default function ContactUs() {
  return (
    <section className="relative flex justify-between gap-10 px-40 py-20 text-white">
      <span className="bg_blend absolute left-0 top-0 size-full"></span>
      <div className="flex flex-col gap-5">
        <div className="rounded-lg border">
          <PixelCard colors="#FF6B1C" >
            <h3 className="absolute left-5 top-5 text-4xl font-bold">
              Contact Us
            </h3>
          </PixelCard>
        </div>
        <div className="flex items-center justify-center gap-3 rounded-lg border bg-black p-5">
          <img src={mailsvg} className="z-[1] size-[3rem]" alt="mail" />
          <p className="z-[1] font-bold">trikona.offical@gmail.com</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-lg border bg-black p-10 px-5 h-full">
        <h3 className="text-3xl font-medium">
          Have an Idea? Let’s Bring It to Life!
        </h3>
        <p>Drop us a message, and we’ll turn your vision into reality.</p>
        <div className="z-[1] flex flex-wrap gap-5 justify-center">
          <div className="flex w-[48%] flex-col gap-2">
            <label>First Name</label>
            <input
              placeholder="First Name"
              className="bg-[#151515] p-3 placeholder-[#999999] rounded-lg"
            />
          </div>
          <div className="flex w-[48%] flex-col gap-2">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              className="bg-[#151515] p-3 placeholder-[#999999] rounded-lg"
            />
          </div>
          <div className="flex w-[48%] flex-col gap-2">
            <label>Email ID</label>
            <input
              placeholder="Email ID"
              className="bg-[#151515] p-3 placeholder-[#999999] rounded-lg"
            />
          </div>
          <div className="flex w-[48%] flex-col gap-2">
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              className="bg-[#151515] p-3 placeholder-[#999999] rounded-lg"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label>Message</label>
            <textarea
              placeholder="Message"
              className="h-[7rem] rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
            />
          </div>
          <button className="bg-primary w-full p-3 rounded-lg font-medium hover:bg-primary/80">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
