import React from "react";

const Pool = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value);
  };
  return (
    <div className="w-full max-w-[1400px]">
      <div className="w-[700px] flex flex-col  border border-black rounded mx-auto min-h-[60vh] bg-white my-5">
        <div className="w-full p-4 flex justify-between items-center">
          <h2>Add liquidity</h2>
          <button>clear all</button>
        </div>
        <div>
          <div className="relative inline-block w-64">
            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
