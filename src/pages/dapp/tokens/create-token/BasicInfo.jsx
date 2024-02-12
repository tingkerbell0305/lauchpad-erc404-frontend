import { useState, useContext } from "react";
import SelectChainRadio from "../../../../components/SelectChainRadio";
import FloatingLabelInput from "../../../../components/inputs/FloatingLabelInput";
import { Link } from "react-router-dom";

import { formDataContext } from "../../../../contexts/formDataContext";
import { toast } from "react-toastify";

const BasicInfo = () => {
  const [type, setType] = useState('eth');
  const { formData, setFormData } = useContext(formDataContext)

  const handler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRadioClick = (type) => {
    if (type != 'eth') {
      toast.warn('Please wait. Coming soon!')
      return
    }
    setType(type)
  }

  return (
    <div className="flex justify-start items-center flex-col w-full gap-4">
      <div className="grid mx-auto items-start max-w-[1300px] mt-2 grid-cols-1 lg:grid-cols-1 w-full gap-5 lg:gap-10">
        <div className="flex justify-start items-start flex-col gap-3 w-full abc bg-black rounded-xl p-5">
          <div className="mb-3">
            <h4 className="text-white text-2xl font-semibold">
              Select Your Token Network:
            </h4>
          </div>
          <SelectChainRadio
            img="/eth.png"
            name="Ethereum"
            label="eth"
            border
            sub="ERC-20"
            selected={type == 'eth'}
            handleRadioClick={() => handleRadioClick('eth')}
          />
          <SelectChainRadio
            border
            img="/Binancelogo.svg"
            name="Binance Smart Chain"
            sub="BEP-20"
            label="bsc"
            selected={type == 'bsc'}
            handleRadioClick={() => handleRadioClick('bsc')}
          />
          <SelectChainRadio
            img="/arbitrum.webp"
            name="Arbitrum"
            sub="ERC-20"
            border
            label="arbitrum"
            selected={type == 'arb'}
            handleRadioClick={() => handleRadioClick('arb')}
          />
          <SelectChainRadio
            img="polygonicon.png"
            name="Polygon (Matic)"
            label="polygon"
            border
            sub="ERC-20"
            selected={type == 'poly'}
            handleRadioClick={() => handleRadioClick('poly')}
          />
          <SelectChainRadio
            img="/zkicon.png"
            name="zkSync"
            border
            label="zk"
            sub={"ERC-20"}
            selected={type == 'zk'}
            handleRadioClick={() => handleRadioClick('zk')}
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full abc bg-black rounded-xl p-5">
          <FloatingLabelInput
            handler={handler}
            name="name"
            placeholder="Ex:Ethereum"
            bgColor="abc bg-black"
            value={formData.name}
            topLabel="Token Name"
          />
          <FloatingLabelInput
            handler={handler}
            name="symbol"
            placeholder="Ex: ETH"
            bgColor="abc bg-black"
            value={formData.symbol}
            topLabel="Token Symbol"
          />
          <FloatingLabelInput
            handler={handler}
            name="decimals"
            placeholder="Ex: 18"
            bgColor="abc bg-black"
            value={formData.decimals}
            topLabel="Token Decimals"
          />
          <FloatingLabelInput
            handler={handler}
            name="supply"
            placeholder="Ex: 100000000"
            bgColor="abc bg-black"
            value={formData.supply}
            topLabel="Token Supply"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
