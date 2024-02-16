// import { Link } from "react-router-dom";
// import ToggleSwitch from "../../../../components/ToggleSwitch";

import { useContext } from "react";
import { formDataContext } from "../../../../contexts/formDataContext";
import { toast } from "react-toastify";

const Confirm = ({ deployedContractAddr }) => {
  const { formData } = useContext(formDataContext)

  const copyAddress = () => {
    if (navigator.clipboard.writeText(deployedContractAddr))
      toast.success('Successfully Copied token address!')
  }

  return (
    <div className="flex justify-start items-start flex-col w-full max-w-[1300px] mx-auto gap-5">
      <div className="grid grid-cols-1  abc bg-black p-5 rounded-xl xl:grid-cols-2 w-full gap-4 xl:gap-8">
        <TokenDetailRow name="Blockchain Network" desc="Ethereum" />
        <TokenDetailRow name="Token Name" desc={formData.name} />
        <TokenDetailRow name="Token Symbol" desc={formData.symbol} />
        <TokenDetailRow name="Token Supply" desc={formData.supply} />
        <TokenDetailRow name="Decimals" desc={formData.decimals} />
        <TokenDetailRow name="Website" desc={formData.website} />
        <TokenDetailRow name="Twitter" desc="nil" />
        <TokenDetailRow name="Telegram" desc="nil" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full gap-5 lg:gap-10">
        <div className="flex justify-start items-start flex-col gap-5 w-full p-5 rounded-xl abc bg-black">
          <div className="flex justify-start items-start flex-col gap-1">
            <h3 className="text-white text-2xl font-semibold">Logo:</h3>
            <img
              src="/logo.png"
              className="w-24 object-cover rounded-lg aspect-square"
              alt=""
            />
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <h3 className="text-white text-2xl font-semibold">Description:</h3>
            <p className="text-white text-base font-medium break-all">
              {formData.description}
            </p>
          </div>
        </div>
        <div className="w-full border border-white h-full rounded-xl p-5">
          <label className="text-2xl font-semibold text-white">
            Deployed Token Contract Address:<br/>
          </label>
          <label className="text-2xl text text-green-500">
            {deployedContractAddr ? deployedContractAddr : ""} &nbsp;
            {deployedContractAddr ? <button onClick={copyAddress}><img src="/copyButton.svg"></img></button> : <></>}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

const TokenDetailRow = ({ name, desc }) => {
  return (
    <div className="grid grid-cols-1 auto-rows-fr  sm:grid-cols-[1fr__2fr] w-full gap-2">
      <p className="bg-gray bg-opacity-30 w-full py-5 pl-3 md:pl-6 text-white font-semibold text-lg sm:text-xl">
        {name}
      </p>
      <p className="border-2 border-solid text-white border-gray border-opacity-30 w-full flex justify-start items-center pl-3 md:pl-6 text-lg sm:text-xl font-semibold">
        {desc}
      </p>
    </div>
  );
};
