import profile from "../assets/profile.png";
import clientLogos from "../assets/Client-logos.png";

const Testimonial = () => {
  return (
    <div
      className="py-36 w-full text-center from-[#F9F0FF] to-[#E2F1FF]"
      style={{
        background:
          "linear-gradient(175.54deg, #F9F0FF 25.81%, #E2F1FF 96.38%)",
        clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-8 mx-auto pt-6 px-2">
        <p className="max-w-[965px] text-[#160637] font-medium text-xl md:text-2xl">
          "What I love about Qubly is the easy way we can collaborate even if
          there is a lot of people involved in the process"
        </p>
        <img src={profile} />
        <p className="font-bold">
          Guillaume Cabane <br />
          CTO @ BigSpring
        </p>
        <div className="border-t border-[#DEC9FA] py-6">
          <img src={clientLogos} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
