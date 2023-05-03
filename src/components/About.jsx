import { FaEye } from "react-icons/fa";
import icon1 from "../assets/chart.png";
import icon2 from "../assets/code.png";
import icon3 from "../assets/bar.png";

const About = () => {
  return (
    <div className="py-28">
      <div className="bg-[#F7F1FF] px-4 py-2 text-primary flex gap-2 items-center justify-center font-medium rounded-3xl w-fit mx-auto">
        <FaEye className="text-lg" /> <span>Why Qubly</span>
      </div>
      <h2 className="font-bold text-3xl md:text-4xl text-center my-6">
        Get actionable insights from Big Data in 3 steps
      </h2>
      <p className="mx-auto text-center text-[#8989A2] font-medium max-w-[670px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      {/* icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-[960px] mx-auto mt-6 font-medium">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#E6F7FF]">
            <img src={icon1} />
          </div>
          <p className="text-[#160637] font-bold">Valuable business insights</p>
          <p className="text-[#8989A2] text-center max-w-[320px]">
            Collect processed & cleansed data that is ready to be analyzed to
            gather valuable business insights.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#FFF1F0]">
            <img src={icon2} />
          </div>
          <p className="text-[#160637] font-bold">Powerful Algorithms</p>
          <p className="text-[#8989A2] text-center max-w-[320px]">
            With the help of powerful algorithms, quality rules & techniques,
            obtain simplified & enriched data.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#F6FFED]">
            <img src={icon3} />
          </div>
          <p className="text-[#160637] font-bold">Data in real-time</p>
          <p className="text-[#8989A2] text-center max-w-[320px]">
            Collect data in real-time from multiple channels and move it into a
            data lake, in its original format.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
