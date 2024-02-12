const StakingPoolsTable = () => {
  return (
    <>
      <div className="flex justify-start overflow-hidden w-full items-start flex-col border-gray border border-solid rounded-xl">
        <h2 className="text-white font-semibold text-2xl px-7 py-5">
          Staking Pools
        </h2>
        <div className="w-full flex flex-col hideScroll justify-start items-start overflow-x-auto">
          <div className="grid min-w-[1100px] grid-cols-8 w-full gap-4 bg-gray bg-opacity-10 py-3 px-7 border-y border-y-gray border-solid">
            <p className="text-white font-semibold text-lg uppercase">
              Reward Token
            </p>
            <p className="text-white font-semibold text-lg uppercase">Staked</p>
            <p className="text-white font-semibold text-lg uppercase">
              Rewards
            </p>
            <p className="text-white font-semibold text-lg uppercase">TVL</p>
            <p className="text-white font-semibold text-lg uppercase">
              Ends at
            </p>
            <p className="text-white text-center font-semibold text-lg uppercase">
              Total Staked
            </p>
            <p className="text-white font-semibold text-lg uppercase text-center">
              APY
            </p>
            <p className="text-white font-semibold text-lg uppercase text-center">
              Actions
            </p>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-start sm:items-center w-full border-t border-solid border-gray py-3 px-7">
          <p className="text-white font-medium text-lg">
            Showing page 1 of 1 | 1 results
          </p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-white font-medium">Show rows</p>
            <select className="w-[40px] px-2 arrow-right bg-transparent border border-solid border-gray text-white">
              <option className="text-black" value="1">
                1
              </option>
              <option className="text-black" value="2">
                2
              </option>
              <option className="text-black" value="3">
                3
              </option>
            </select>
            <div className="flex justify-center items-center abc bg-black border-gray rounded-md border-solid overflow-hidden">
              <button className="p-2 border-r border-solid border-gray text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="p-2 border-r border-solid border-gray text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="p-2 border-r border-solid border-gray text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button className="p-2  text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-2 text-white mx-auto w-full max-w-[150px] font-semibold text-xl bg-cyan hover:opacity-30 transition-all duration-300 rounded-lg h-[50px]">
        Create Pool
      </button>
    </>
  );
};

export default StakingPoolsTable;

const TableRow = () => {
  return (
    <div className="grid min-w-[1100px] grid-cols-8 items-center w-full gap-4 py-3 pl-7 pr-8">
      <p className="text-white font-semibold text-lg">GPTC</p>
      <p className="text-white font-medium">0.0</p>
      <p className="text-white font-medium">100000.0</p>
      <p className="text-white font-medium">720k</p>
      <p className="text-white font-medium">03/27/2023 19:10</p>
      <p className="text-white font-medium text-center">0.0</p>
      <p className="text-white font-medium text-center">20%</p>
      <div className="flex justify-center items-center w-full gap-2">
        <button className="bg-cyan text-white text-base font-semibold rounded px-4 py-2 hover:bg-transparent border border-solid border-cyan hover:text-cyan transition-all duration-300">
          Stake
        </button>
        <button className="bg-transparent text-base font-semibold rounded px-4 py-2 hover:bg-cyan text-cyan hover:text-white transition-all duration-300 border border-solid border-cyan">
          Unstake
        </button>
      </div>
    </div>
  );
};
