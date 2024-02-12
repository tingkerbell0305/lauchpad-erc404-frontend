const VestingEvents = () => {
  return (
    <div className="flex mt-5 justify-start overflow-hidden w-full items-start gap-4 flex-col border-gray border border-solid rounded-xl">
      <h2 className="text-white border-b border-solid  border-gray w-full font-semibold text-2xl px-7 py-5">
        TNNS Vesting Events
      </h2>
      <div></div>
      <div className="w-full flex justify-center items-center flex-col gap-3 py-5">
        <img src="/none.webp" className="w-[160px] object-contain" alt="" />
        <h3 className="text-white leading-[1] mt-3 font-semibold text-xl">
          No Vested Tokens
        </h3>
        <p className="text-gray font-medium leading-[1] text-base">
          You haven't vested any tokens yet.
        </p>
      </div>
    </div>
  );
};

export default VestingEvents;
