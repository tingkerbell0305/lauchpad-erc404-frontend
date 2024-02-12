const InfoModal = ({ setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 backdrop-blur-[4px] left-0 bg-gray bg-opacity-30 z-[50]  w-full h-full"
      ></div>
      <div className="flex justify-start  max-h-[90%] overflow-y-auto items-center flex-col w-[95%] max-w-[490px] p-5  fixed z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 abc bg-black rounded-xl gap-5">
        <img
          src="/logo.svg"
          className="w-[160px] -mb-3 object-contain"
          alt=""
        />
        <div className="flex justify-center items-center flex-col text-center w-full ">
          <h3 className="text-white font-semibold text-3xl">
            Welcome To Token Creation
          </h3>
          <p className="text-cyan font-medium text-2xl">
            Powered By Crypto Hub
          </p>
          <p className="text-gray font-medium text-center">
            Create your own token within minutes with only a few clicks of your
            mouse
          </p>
        </div>
        <div className="gap-4 flex justify-start items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="min-w-[40px] w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <div>
            <h4 className="text-white font-semibold text-xl sm:text-2xl">
              No Coding Experience
            </h4>
            <p className="text-gray font-medium">
              Our token generator makes it easy for anyone to create a token in
              minutes
            </p>
          </div>
        </div>
        <div className="gap-4 flex justify-start items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="min-w-[40px] w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clipRule="evenodd"
            />
          </svg>

          <div>
            <h4 className="text-white font-semibold text-xl sm:text-2xl">
              Powerful Plug-in Features
            </h4>
            <p className="text-gray font-medium">
              Advanced features can be easily added to your token with the press
              of a button
            </p>
          </div>
        </div>
        <div className="gap-4 flex justify-start items-center w-full">
          <img
            src="/metamask-ico.png"
            className="min-w-[40px] w-10 h-10"
            alt=""
          />

          <div>
            <h4 className="text-white font-semibold text-xl sm:text-2xl">
              Tokens Sent To Metamask
            </h4>
            <p className="text-gray font-medium">
              Have your new token sent directly to your Metask wallet upon
              creation
            </p>
          </div>
        </div>
        <button
          onClick={() => setModal(false)}
          className="bg-cyan mt-1 w-full h-[45px] rounded-lg text-white text-lg font-semibold grid place-items-center sm:self-end hover:opacity-40 transition-all duration-300"
        >
          Start creating token
        </button>
      </div>
    </>
  );
};

export default InfoModal;
