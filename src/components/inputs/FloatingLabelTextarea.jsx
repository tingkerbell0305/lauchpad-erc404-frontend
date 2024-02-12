const FloatingLabelTextarea = ({
  handler,
  value,
  name,
  placeholder,
  topLabel,
  bgColor = "bg-primary",
}) => {
  return (
    <div className="flex justify-start items-start flex-col w-full gap-2">
      {topLabel && (
        <label htmlFor={name} className="text-white  text-lg font-medium">
          {topLabel}
        </label>
      )}
      <div className="relative w-full">
        <textarea
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handler}
          className={` px-3 pt-4 text-white  text-base font-semibold  w-full  text-gray-900 ${bgColor} rounded-lg border border-gray border-opacity-[0.24] focus:border-opacity-100 appearance-none focus:outline-none resize-none focus:ring-0 focus:border-cyan peer h-[148px]`}
          placeholder=" "
        ></textarea>
        <label
          htmlFor={name}
          className={`absolute py text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${bgColor} text-gray px-3 peer-focus:px-2 peer-focus:text-cyan  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default FloatingLabelTextarea;
