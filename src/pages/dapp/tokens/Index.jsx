import { Link } from "react-router-dom";
import FloatingLabelInput from "../../../components/inputs/FloatingLabelInput";
import TokenRow from "../../../components/TokenRow";

const Index = () => {
  return (
    <div className="w-full flex justify-start items-center flex-col gap-5">
      <h2 className="text-white text-[35px] md:text-[50px] font-bold">
        Tokens
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-7 max-w-[1100px]">
        <div className="py-7 w-full flex justify-start items-center gap-4 px-4 sm:px-6 abc bg-black shadow-shadowPresaleBox rounded-xl">
          <div className="bg-cyan text-white min-w-[48px] aspect-square rounded-full grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <p className="text-white font-semibold text-2xl leading-[1]">
              $ 395,536,309.23
            </p>
            <p className="text-gray font-medium text-base leading-[1]">
              Total Token Lock Value
            </p>
          </div>
        </div>
        <div className="py-7 w-full flex justify-start items-center gap-4 px-4 sm:px-6 abc bg-black shadow-shadowPresaleBox rounded-xl">
          <div className="bg-cyan text-white min-w-[48px] aspect-square rounded-full grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <p className="text-white font-semibold text-2xl leading-[1]">
              $ 395,536,309.23
            </p>
            <p className="text-gray font-medium text-base leading-[1]">
              Total Liquidity Lock Value
            </p>
          </div>
        </div>
        <div className="py-7 w-full flex justify-start items-center gap-4 px-4 sm:px-6 abc bg-black shadow-shadowPresaleBox rounded-xl">
          <div className="bg-cyan text-white min-w-[48px] aspect-square rounded-full grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <p className="text-white font-semibold text-2xl leading-[1]">
              31502
            </p>
            <p className="text-gray font-medium text-base leading-[1]">
              Projects Locked With Crypto Hub
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-3 justify-start items-start flex-col w-full border border-solid border-gray border-opacity-25 rounded-xl">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full gap-5 lg:gap-2 py-4 px-5">
          <div className="flex sm:flex-row flex-col w-full lg:w-auto justify-start items-center gap-7">
            <div className="flex justify-start items-center gap-7">
              <button className="text-white font-semibold text-base">
                Favourites
              </button>
              <button className="text-white flex justify-start items-center gap-1 font-semibold text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                    clipRule="evenodd"
                  />
                </svg>
                Filter
              </button>
            </div>
            <select className="text-white w-full sm:w-[180px] border border-solid border-opacity-25 focus:border-cyan outline-none border-gray px-2 h-[40px] sm:h-[34px] rounded-lg bg-transparent">
              <option className="text-black" value="Value Locked">
                Value Locked
              </option>
              <option className="text-black" value="Next Unlock">
                Next Unlock
              </option>
            </select>
          </div>
          <div className="flex justify-end lg:w-auto w-full lg:flex-row flex-col items-center gap-5">
            <Link
              to="/create-token"
              className="text-white grid place-items-center font-semibold text-lg bg-cyan  hover:opacity-30 transition-all duration-300 h-[45px] w-full lg:w-[250px] rounded-lg"
            >
              Create Token
            </Link>
            <div className="w-full lg:w-[250px]">
              <FloatingLabelInput
                height="h-[45px]"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col  w-full overflow-x-auto">
          <div className="grid min-w-[1250px] grid-cols-[0.9fr__0.5fr__130px__180px__1fr__1fr__120px__80px] px-5 bg-gray bg-opacity-10 w-full gap-7 items-center py-4">
            <p className="text-white font-semibold text-lg leading-[1.2] text-left uppercase">
              Name
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Blockchain
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Liquidity Locked
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Coingecko Ranking
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Tokens Locked
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Value Locked
            </p>
            <p className="text-white font-semibold text-lg leading-[1.2]  uppercase">
              Next Unlock
            </p>
            <p className="text-white text-center font-semibold text-lg leading-[1.2]  uppercase">
              Action
            </p>
          </div>
          <TokenRow />
          <TokenRow />
          <TokenRow />
          <TokenRow />
          <TokenRow />
          <TokenRow />
        </div>
      </div>
    </div>
  );
};

export default Index;
