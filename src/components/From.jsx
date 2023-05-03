import ggBtn from "../assets/google-btn.png";

const From = () => {
  return (
    <div
      className="bg-[#fff] rounded-lg p-8"
      style={{
        boxShadow: "4px 4px 12px rgba(137, 137, 162, 0.122)",
        marginTop: "-60px",
      }}
    >
      <p className="text-[#160637] text-2xl text-center font-bold">Sign Up</p>
      <button
        className="bg-[#722ED1] p-3 rounded-md w-full text-[#fff] font-medium my-2"
        style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.161)" }}
      >
        Start your free trial
      </button>
      <input
        type="text"
        placeholder="Your primary email"
        className="border border-[#D9D9D9] p-3 rounded-md w-full my-2 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Passowrd"
        className="border border-[#D9D9D9] p-3 rounded-md w-full my-2 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Re-type Passowrd"
        className="border border-[#D9D9D9] p-3 rounded-md w-full my-2 focus:outline-none"
      />
      <p className="font-medium text-center my-2">OR</p>
      <img src={ggBtn} className="my-2 w-[200px] mx-auto cursor-pointer" />

      <p className="font-medium text-sm text-[#8989A2] text-center pt-3 mt-3 border-t border-[#c7c7d3]">
        Already have an account? <span className="text-primary">Login</span>
      </p>
    </div>
  );
};

export default From;
