const LockEvents = () => {
  return (
    <div className="flex mt-5 justify-start overflow-hidden w-full items-start flex-col border-gray border border-solid rounded-xl">
      <h2 className="text-white  font-semibold text-2xl px-7 py-5">
        TNNS Lock Events
      </h2>
      <EventRow />
      <EventRow />
      <EventRow locked />
      <EventRow />
      <EventRow locked />
    </div>
  );
};

export default LockEvents;

const EventRow = ({ locked }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between w-full items-start gap-4 md:gap-0 md:items-center py-6 px-7 border-t border-solid border-gray">
      <div className="flex sm:flex-row flex-col sm:w-auto w-full  justify-start items-center gap-8">
        <img
          src="/test.png"
          className="w-20 sm:w-16 object-cover aspect-square"
          alt=""
        />
        <div className="flex justify-start w-full items-start flex-col gap-2">
          <h4 className="text-white font-semibold text-xl leading-[1]">TNNS</h4>
          <p className="text-gray font-medium text-base leading-[1]">
            150,000.00 TNNS
          </p>
          <div
            className={`${
              locked
                ? "bg-darkRed text-red-600 border-darkRed"
                : "bg-successGreen text-successGreen border-green"
            }  my-1 flex justify-center px-3 py-1 text-sm font-semibold items-center bg-opacity-30 gap-2 rounded  border  border-solid`}
          >
            {locked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
              </svg>
            )}

            {locked ? "Locked" : "Unlocked"}
          </div>
          <div className="relative w-full min-w-[280px] rounded-full bg-gray overflow-hidden h-[6px]">
            <div
              className={`${
                locked ? "bg-darkRed" : "bg-successGreen"
              } w-[60%] absolute left-0 top-0 h-full`}
            ></div>
          </div>
          <p className="text-gray text-sm font-medium leading-[1]">
            0 days, 0 hours, 0 minutes, 0 seconds
          </p>
          <p className="text-white  font-medium leading-[1]">
            Locked Nov. 11th 2021Unlocks Nov. 11th 2022
          </p>
        </div>
      </div>
      <button className="rounded-lg px-4 py-2 text-white font-semibold flex justify-center items-center gap-2 text-base border-gray hover:bg-gray hover:bg-opacity-30 transition-all duration-300 border-solid border">
        View Transaction{" "}
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
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      </button>
    </div>
  );
};
