import img from "../assets/image-1.png";
import bright from "../assets/edit-brightness.png";

const Hero = () => {
  return (
    <div className="max-w-[960px] mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 self-center mt-24 md:mt-0 md:pt-20">
          <div className="flex flex-col gap-6">
            {/* tag */}
            <div className="text-sm md:text-base flex items-center justify-start gap-3 font-medium bg-[#F7F1FF] w-fit rounded-3xl text-primary px-4 py-2">
              <img src={bright} alt="" />
              <span>v3.1 released. </span>
              <span className="underline">Learn more</span>
            </div>
            <h1 className="font-bold text-3xl md:text-5xl block">
              Your data with
              <br /> real-time analytics
            </h1>
            <p className="opacity-50 font-medium">
              Harness the potential of Big Data Analytics & Cloud Services{" "}
              <br /> and become a data-driven organization with Needle tail
            </p>
            {/* btns */}
            <div className="font-medium">
              <button className="bg-primary text-[#ffff] rounded-3xl px-4 py-2 hover:scale-110 duration-300 mr-4">
                Start free trial
              </button>
              <button className="text-primary bg-[#ffff] rounded-3xl px-4 py-2 hover:scale-110  duration-300">
                Learn more
              </button>
            </div>
          </div>
          <div>
            <img src={img} />
          </div>
      </div>
    </div>
  );
};

export default Hero;
