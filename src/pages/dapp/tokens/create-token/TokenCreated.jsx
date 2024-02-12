import { Link } from "react-router-dom";

const TokenCreated = () => {
  return (
    <div className="flex justify-start items-center flex-col mx-auto gap-10 w-full max-w-[1000px]">
      <h3 className="text-white text-3xl sm:text-5xl font-semibold">
        Congratulations!
      </h3>
      <div className="flex abc bg-black p-5 rounded-xl justify-start items-center sm:w-auto w-full gap-5">
        <img
          src="/test.png"
          className="rounded-lg w-20 aspect-square object-cover"
          alt=""
        />{" "}
        <div>
          <h3 className="text-white text-3xl font-semibold">TNNS</h3>
          <div className="flex justify-start text-gray items-center gap-2">
            <p className="text-base truncate sm:max-w-none max-w-[100px] font-medium">
              0x6C7C87D9868b1dB5a0F62d867bAa90e0AdFA7Cfd
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 w-4 h-4 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                  clipRule="evenodd"
                />
                <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 w-4 h-4 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button>
              <img
                src="/metamask-ico.png"
                className="w-5 sm:w-7 object-contain"
                alt=""
              />
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 w-4 h-4 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex max-w-[450px] mx-auto justify-start items-center gap-2 h-max flex-col w-full abc bg-black py-8 px-5 rounded-xl ">
        <h3 className="text-white text-base text-center sm:text-2xl font-medium">
          Dont stop now, move on to the Next step
        </h3>
        <div className="flex sm:w-auto w-full justify-start mt-5 items-start flex-col gap-4">
          <Link
            to="/"
            className="bg-cyan w-full sm:w-[300px] h-[45px] rounded-lg text-white text-base sm:text-lg font-semibold grid place-items-center"
          >
            Register your Blockchain Company
          </Link>
          <Link
            to="/"
            className="bg-cyan w-full sm:w-[300px] h-[45px] rounded-lg text-white text-base sm:text-lg font-semibold grid place-items-center"
          >
            Create Presale
          </Link>
          <Link
            to="/"
            className="bg-cyan w-full sm:w-[300px] h-[45px] rounded-lg text-white text-base sm:text-lg font-semibold grid place-items-center"
          >
            Create Token Vesting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenCreated;
