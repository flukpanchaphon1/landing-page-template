import icon from "../assets/engineering-icon.png";
import img from "../assets/image-6.png";

const EngineeringTeams = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 max-w-[960px] py-14 pb-14 md:pb-24 mx-auto px-2">
      <div>
        <div className="bg-[#F7F1FF] px-4 py-2 text-primary flex gap-2 items-center justify-center font-medium rounded-3xl w-fit">
          <img src={icon} /> <span>For Engineering Teams</span>
        </div>
        <p className="font-bold text-3xl md:text-4xl my-6">
          Data-driven pipelines in minutes
        </p>
        <p className="font-medium text-[#8989A2] max-w-[475px]">
          Maintenance-free data pipelines with quick set-up and straight-forward
          deployments that are powered by a modern & scalable platform.
        </p>
      </div>
      <div className="relative">
        <img src={img} className="md:absolute top-0 right-0 lg:min-w-[680px] h-auto lg:-mt-[15%] lg:-mr-[20%]" />
      </div>
    </div>
  );
};

export default EngineeringTeams;
