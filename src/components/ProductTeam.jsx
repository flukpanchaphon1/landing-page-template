import electronicCircuit from "../assets/electronic-circuit.png";
import circle from "../assets/img-circle.png";

const ProductTeam = () => {
  return (
    <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 pb-10 md:pb-28 max-w-[960px] w-full mx-auto px-2">
      <div className="flex items-center justify-center md:justify-start">
        <img src={circle} />
      </div>
      <div className="flex items-center justify-start">
        <div>
          <div className="bg-[#F7F1FF] px-4 py-2 text-primary flex gap-2 items-center justify-center font-medium rounded-3xl w-fit">
            <img src={electronicCircuit} /> <span>For Product Teams</span>
          </div>
          <p className="font-bold text-3xl md:text-4xl my-6">Launch with the best stack</p>
          <p className="font-medium text-[#8989A2] max-w-[475px]">
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
