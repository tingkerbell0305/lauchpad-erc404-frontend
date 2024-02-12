// import { useState } from "react";

const ToggleSwitch = ({ val, handler, name }) => {
  //   const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => handler(name)}
      className={`${
        val ? "bg-yellow-300" : "bg-white"
      } rounded-full relative w-[58px] h-[32px]`}
    >
      <div
        className={`rounded-full aspect-square transition-all duration-300  w-[26px] absolute left-1 top-1/2 -translate-y-1/2 ${
          val ? "translate-x-[23px] bg-white" : "translate-x-0 bg-gray"
        }`}
      ></div>
    </button>
  );
};

export default ToggleSwitch;
