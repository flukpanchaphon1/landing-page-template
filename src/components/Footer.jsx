import logo from "../assets/Logo.png";
import fb from "../assets/facebook-icon.png";
import twitter from "../assets/twitter.png";
import ig from "../assets/instagram.png";
import send from "../assets/send.png";
import cpr from "../assets/cpr.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FBFCFF] flex items-center justify-center p-2">
        <div className="max-w-[960px] w-full flex flex-col lg:flex-row items-start justify-between gap-10 font-medium py-8">
          <div>
            <img src={logo} />
            <p className="md:max-w-[210px] my-6 text-[#160637] text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim
            </p>
            <div className="flex gap-3">
              <img src={fb} />
              <img src={twitter} />
              <img src={ig} />
            </div>
          </div>
          <div className=" text-[#160637]">
            <p className="font-bold">Product</p>
            <ul className="text-xs mt-5 flex flex-col gap-2">
              <li>Connections</li>
              <li>Protocols</li>
              <li>Personas</li>
              <li>Integrations</li>
              <li>Catalog</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>GDPR</li>
            </ul>
          </div>
          <div className=" text-[#160637]">
            <p className="font-bold min-w-max">For Developers</p>
            <ul className="text-xs mt-5 flex flex-col gap-2">
              <li>Docs</li>
              <li>API</li>
              <li>Open Source</li>
              <li>Engineering Team</li>
            </ul>
          </div>
          <div className=" text-[#160637]">
            <p className="font-bold">Company</p>
            <ul className="text-xs mt-5 flex flex-col gap-2">
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div className=" text-[#160637]">
            <p className="font-bold">Support</p>
            <ul className="text-xs mt-5 flex flex-col gap-2">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Security</li>
              <li>Bulletins</li>
              <li>Documentation</li>
              <li>Partner</li>
              <li>Portal</li>
            </ul>
          </div>
          <div className=" text-[#160637]">
            <p className="font-bold">Newsletter</p>
            <div
              className="bg-[#fff] flex items-center justify-start  px-4 py-3 box-border mt-5"
              style={{ boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.051)" }}
            >
              <input
                type="email"
                className="focus:outline-none text-sm"
                placeholder="Email"
                style={{ width: "calc(100% - 20px)" }}
              />
              <img src={send} width={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-2 gap-2 mt-4 font-bold text-[#160637]">
        <span>Rahul Rao </span><img src={cpr} />
      </div>
    </div>
  );
};

export default Footer;
