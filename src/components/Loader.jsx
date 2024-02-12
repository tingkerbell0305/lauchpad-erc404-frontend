const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 h-full w-full bg-black z-[200]">
      <img src="/loader.gif" className="w-[200px] object-contain" alt="" />
    </div>
  );
};

export default Loader;
