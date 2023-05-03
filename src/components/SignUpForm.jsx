import airbnb from "../assets/airbnb.png";
import react from "../assets/react.png";
import sky from "../assets/sky.png";
import accenture from "../assets/accenture.png";
import From from "./From";

const SignUpForm = () => {
  return (
    <div className="max-w-[960px] mx-auto py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16">
        <div className="px-2">
          <p className="font-bold text-2xl md:text-3xl text-center md:text-left">
            See why the world’s best companies use Qubly to become truly
            data-driven.
          </p>
          <div className="flex items-center justify-center gap-4 mt-9 mb-14">
            <span className="inline-block w-full bg-[#D6D6D6] h-[1px]"></span>
            <p className="min-w-max text-[#8989A2] font-medium">Trusted by</p>
            <span className="inline-block w-full bg-[#D6D6D6] h-[1px]"></span>
          </div>
          {/* icon */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img src={accenture} className="max-w-[130px] md:max-w-none h-fit" />
            </div>
            <div className="flex justify-center">
              <img src={react} />
            </div>
            <div className="flex justify-center">
              <img src={airbnb} />
            </div>
            <div className="flex justify-center">
              <img src={sky} />
            </div>
          </div>
        </div>
        <div className="bg-[#F9F0FF] p-6">
          <From />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
