import { useForm, SubmitHandler } from "react-hook-form";
import mailsvg from "../../assets/mail.svg";
import PixelCard from "../PixelCard";
import { toast } from "react-toastify";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("access_key", "2ec64207-6d8b-4e43-aed2-f88946774177");

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully", { theme: "dark" });
        reset();
      } else {
        toast.error(result.message || "Something went wrong, try again", {
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", { theme: "dark" });
    }
  };

  return (
    <section className="relative flex justify-between gap-10 px-40 py-20 text-white max-lg:flex-col-reverse max-lg:px-10 max-sm:px-0 contactus items-center overflow-hidden" id="contactus">
      <span className="bg_blend absolute left-0 top-0 size-full"></span>
      
      <div className="flex flex-col gap-5 max-sm:w-[70%]">
        <div className="rounded-lg border max-lg:hidden">
          <PixelCard colors="#FF6B1C">
            <h3 className="absolute left-5 top-5 text-4xl font-bold">
              Contact Us
            </h3>
          </PixelCard>
        </div>
        <a href="mailto:trikonaofficial@gmail.com" className="flex items-center justify-center gap-3 rounded-lg border bg-black p-5  ">
          <img src={mailsvg} className="z-[1] size-[3rem]" alt="mail" />
          <p className="z-[1] font-bold">trikonaofficial@gmail.com</p>
        </a>
      </div>
      <div className="flex h-full w-full flex-col gap-2 rounded-lg border bg-black p-10 px-5 max-sm:w-[70%] ">
        <h3 className="text-3xl font-medium z-[1] max-lg:text-2xl">
          Have an Idea? Let’s Bring It to Life!
        </h3>
        <p className="z-[1] max-lg:text-sm">Drop us a message, and we’ll turn your vision into reality.</p>
        <form
          className="z-[1] flex flex-wrap justify-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-[48%] flex-col gap-2 max-lg:w-full">
            <label>First Name</label>
            <input
              placeholder="First Name"
              className="rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-red-500">First Name is required</p>
            )}
          </div>
          <div className="flex w-[48%] flex-col gap-2 max-lg:w-full">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              className="rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
              {...register("lastName")}
            />
          </div>
          <div className="flex w-[48%] flex-col gap-2 max-lg:w-full">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Email ID"
              className="rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">Email ID is required</p>
            )}
          </div>
          <div className="flex w-[48%] flex-col gap-2 max-lg:w-full">
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              className="rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
              {...register("phone")}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label>Message</label>
            <textarea
              placeholder="Message"
              className="h-[7rem] rounded-lg bg-[#151515] p-3 placeholder-[#999999]"
              {...register("message")}
            />
          </div>
          <button className="w-full rounded-lg bg-primary p-3 font-medium hover:bg-primary/80">
            Send
          </button>
        </form>
      </div>
      <h2 className="text-white z-[1] text-4xl lg:hidden px-5">Contact Us</h2>
    </section>
  );
}
