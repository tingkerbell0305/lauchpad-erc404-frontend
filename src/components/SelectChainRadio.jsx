export const SelectChainRadio = ({ name, label, img, sub, border, selected, handleRadioClick }) => {
  return (
    <label
      className={`flex justify-between items-center w-full cursor-pointer hover:bg-neutral-800 gap-4 pr-5 ${border ? "border border-solid border-gray rounded-xl" : ""}`}
      htmlFor={label}
    >
      <div className="p-2 flex justify-start items-center gap-2">
        <img
          src={img}
          className="w-14 rounded-lg aspect-square object-contain"
          alt=""
        />
        <div>
          <h4 className="text-white font-semibold text-lg sm:text-2xl leading-[1] mb-1">
            {name}
          </h4>
          <p className="text-gray font-medium text-sm sm:text-base leading-[1]">
            Select if your coin is an {sub} token
          </p>
        </div>
      </div>
      <input
        type="radio"
        name="coin"
        id={label}
        checked={selected}
        onClick={() => { handleRadioClick() }}
        className="accent-yellow-300 w-5 aspect-square"
      />
    </label>
  );
};

export default SelectChainRadio;
