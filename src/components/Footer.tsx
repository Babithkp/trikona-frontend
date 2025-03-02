import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-between gap-10 bg-black p-5 px-10 max-sm:p-2 max-md:px-5">
      <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-10">
        <div className="flex items-center gap-5">
          <img src={logo} className="size-18" alt="logo" />
          <h1 className="text-3xl font-medium text-white max-sm:text-2xl">
            Trikona
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <p>Follow us on</p>
          <div className="z-[1] flex items-center gap-5">
            <a href="https://www.linkedin.com/company/trikonatech/?viewAsMember=true" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/trikonaofficial" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCkyoUycl1sy2B1dDX_l0fMg" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://x.com/Trikona_Tech" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full items-end justify-between max-md:flex-col max-md:gap-10 max-md:items-center">
        <div>
          <p>Contact us on:</p>
          <a href="mailto:trikonaofficial@gmail.com">
            trikonaofficial@gmail.com
          </a>
        </div>
        <div className="flex gap-5 text-sm text-secondary">
          <Dialog>
            <DialogTrigger className="text-secondary">Privacy</DialogTrigger>
            <DialogContent className="p-5 max-w-5xl max-lg:w-full"> 
              <DialogHeader>
                <DialogTitle className="text-xl">Privacy Policy</DialogTitle>
              </DialogHeader>
              <DialogDescription></DialogDescription>
              <div className=" h-[30rem] overflow-y-auto bg-[#252525] py-2 pl-10 pr-5 text-white rounded-lg">
                <ul className="list-decimal text-sm">
                  <li>
                    Introduction
                    <ul className="pl-2">
                      <li>
                        Trikona Agency respects your privacy and is committed to
                        protecting your personal information. This policy
                        outlines how we collect, use, and safeguard your data.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Information We Collect
                    <ul className="list-disc pl-2">
                      <li>
                        Personal Information: Name, email, phone number, and
                        payment details.
                      </li>
                      <li>
                        Usage Data: IP addresses, browser type, and website
                        interactions.
                      </li>
                    </ul>
                  </li>
                  <li>
                    How We Use Your Information
                    <ul className="list-disc pl-2">
                      <li>To provide and improve our services.</li>
                      <li>
                        To communicate with clients regarding their projects.
                      </li>
                      <li>To process payments and invoices.</li>
                      <li>To comply with legal obligations.</li>
                    </ul>
                  </li>
                  <li>
                    Data Sharing
                    <ul className="pl-2">
                      <li>
                        We do not sell or rent personal data to third parties.
                        Information may be shared with trusted partners for
                        service fulfillment.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Security Measures
                    <ul className="pl-2">
                      <li>
                        We implement industry-standard security measures to
                        protect your data. However, no method of transmission
                        over the internet is 100% secure.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cookies and Tracking
                    <ul className="pl-2">
                      <li>
                        Our website may use cookies to enhance user experience.
                        You can manage cookie preferences through your browser
                        settings.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Third-Party Links
                    <ul className="pl-2">
                      <li>
                        Our website may contain links to third-party sites. We
                        are not responsible for their privacy practices.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Your Rights
                    <ul className="list-disc pl-2">
                      <li>
                        You can request access to, correction, or deletion of
                        your personal data.
                      </li>
                      <li>
                        You can opt out of marketing communications at any time.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Changes to This Policy
                    <ul className="pl-2">
                      <li>
                        We may update this Privacy Policy from time to time.
                        Changes will be posted on this page.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Contact Us
                    <ul className="pl-2">
                      <li>
                        For any questions regarding these policies, contact us
                        at trikonaofficial@gmail.com.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="text-secondary">Terms & Conditions</DialogTrigger>
            <DialogContent className="p-5 max-w-5xl max-lg:w-full"> 
              <DialogHeader>
                <DialogTitle className="text-xl">Terms and Conditions</DialogTitle>
              </DialogHeader>
              <DialogDescription></DialogDescription>
              <div className="scrollbar-thin scrollbar-thumb-rounded-full h-[30rem] overflow-y-auto bg-[#252525] py-2 pl-10 pr-5 text-white rounded-lg">
                <ul className="list-decimal text-sm">
                  <li>
                  Introduction Welcome to Trikona Agency. By accessing our website and using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                    
                  </li>
                  <li>
                  Services Trikona Agency provides website design and development, app development, AI agents, and cloud services. The scope of work, timelines, and deliverables will be agreed upon before the commencement of any project.
                  </li>
                  <li>
                  Payments and Refunds
                    <ul className="list-disc pl-2">
                      <li>Payment terms will be outlined in the service agreement.</li>
                      <li>
                        To communicate with clients regarding their projects.
                      </li>
                      <li>A non-refundable deposit may be required before project commencement.</li>
                      <li>Refunds are only applicable if Trikona Agency fails to deliver services as per the agreed terms.</li>
                    </ul>
                  </li>
                  <li>
                  Intellectual Property
                    <ul className="pl-2 list-disc">
                      <li>
                      All content, designs, software, and AI models created by Trikona Agency remain the property of Trikona Agency until full payment is received.
                      </li>
                      <li>
                      Upon full payment, ownership of the final deliverables will be transferred to the client.
                      </li>
                      <li>
                      Trikona Agency retains the right to showcase completed projects in its portfolio unless otherwise agreed upon.
                      </li>
                    </ul>
                  </li>
                  <li>
                  Client Responsibilities
                    <ul className="pl-2 list-disc">
                      <li>
                      Clients must provide necessary content, feedback, and approvals in a timely manner.
                      </li>
                      <li>
                      Delays in client responses may impact project timelines.
                      </li>
                      <li>
                      Clients are responsible for maintaining and securing any provided access credentials for cloud services and applications.
                      </li>
                    </ul>
                  </li>
                  <li>
                  Limitation of Liability Trikona Agency is not responsible for any losses or damages incurred due to website downtime, security breaches, AI model inaccuracies, application malfunctions, or other unforeseen circumstances.
                  </li>
                  <li>
                  Termination Either party may terminate a project with written notice. Any work completed up to the termination date will be billed accordingly. Any deposits made before termination are non-refundable unless agreed otherwise.
                  </li>
                 
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}
