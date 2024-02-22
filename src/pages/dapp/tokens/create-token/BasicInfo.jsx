import { useState, useContext, useEffect } from "react";
import SelectChainRadio from "../../../../components/SelectChainRadio";
import FloatingLabelInput from "../../../../components/inputs/FloatingLabelInput";

import { formDataContext } from "../../../../contexts/formDataContext";
import { useNetwork } from "wagmi";
import { IS_PRODUCT_MODE } from "../../../../config/global";

const BasicInfo = () => {
  const { chain } = useNetwork();
  const [chainType, setChainType] = useState('');
  const { formData, setFormData } = useContext(formDataContext)
  const testFlag = IS_PRODUCT_MODE;

  useEffect(() => {
    if (chain) {
      if (testFlag === false) {
        if (chain.id === 280)
          setChainType('zkSyncTestnet')
        else if (chain.id === 5)
          setChainType('goerli')
      } else if (testFlag === true) {
        if (chain.id === 1)
          setChainType('mainnet')
        else if (chain.id === 56)
          setChainType('bsc')
        else if (chain.id === 42161)
          setChainType('arbitrum')
        else if (chain.id === 137)
          setChainType('polygon')
        else if (chain.id === 324)
          setChainType('zkSync')
      }
    }
  }, [chain]);

  const handler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioClick = async (type) => {
    if (testFlag === false) {
      if (type === 'zkSyncTestnet') {
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x118' }], // chainId must be in hexadecimal numbers
            });
            setChainType(type)
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      } else if (type === 'goerli') {
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
            });
            setChainType(type)
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      }
    } else if (testFlag === true) {
      if (type === 'mainnet') {
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
            });
            setChainType(type)
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      } else if (type === 'bsc') {
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
            });
            setChainType(type)
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      } else if (type === 'arbitrum') {
        setChainType(type)
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0xa4b1' }], // chainId must be in hexadecimal numbers
            });
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      } else if (type === 'polygon') {
        setChainType(type)
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
            });
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      } else if (type === 'zkSync') {
        setChainType(type)
        if (window.ethereum) {
          try {
            // Request to switch to the Binance Smart Chain network
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x144' }], // chainId must be in hexadecimal numbers
            });
          } catch (error) {
            // Handle the error
            console.error(error);
          }
        } else {
          // MetaMask is not installed
          alert('MetaMask is not installed. Please consider installing it: MetaMask [^2^]');
        }
      }
    }
    // setChainType(type)
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
          {
            testFlag === false &&
            <SelectChainRadio
            img="/eth.png"
            name="goerli"
            label="goerli"
            border
            sub="ERC-404"
            selected={chainType == 'goerli'}
            handleRadioClick={() => handleRadioClick('goerli')}
            />
          }
          {
            testFlag === false &&
            <SelectChainRadio
              img="/zkicon.png"
              name="zkSyncTestnet"
              label="zkSyncTestnet"
              border
              sub="ERC-404"
              selected={chainType == 'zkSyncTestnet'}
              handleRadioClick={() => handleRadioClick('zkSyncTestnet')}
            />
          }
          {
            testFlag &&
            <SelectChainRadio
              img="/eth.png"
              name="Ethereum"
              label="eth"
              border
              sub="ERC-404"
              selected={chainType == 'mainnet'}
              handleRadioClick={() => handleRadioClick('mainnet')}
            />
          }
          {testFlag &&
            <SelectChainRadio
              border
              img="/Binancelogo.svg"
              name="Binance Smart Chain"
              sub="BEP-404"
              label="bsc"
              selected={chainType == 'bsc'}
              handleRadioClick={() => handleRadioClick('bsc')}
            />
          }
          {testFlag &&
            <SelectChainRadio
              img="/arbitrum.webp"
              name="Arbitrum"
              sub="ERC-404"
              border
              label="arbitrum"
              selected={chainType == 'arbitrum'}
              handleRadioClick={() => handleRadioClick('arbitrum')}
            />
          }
          {testFlag &&
            <SelectChainRadio
              img="polygonicon.png"
              name="Polygon (Matic)"
              label="polygon"
              border
              sub="ERC-404"
              selected={chainType == 'polygon'}
              handleRadioClick={() => handleRadioClick('polygon')}
            />
          }
          {testFlag &&
            <SelectChainRadio
              img="/zkicon.png"
              name="zkSync"
              border
              label="zk"
              sub={"ERC-404"}
              selected={chainType == 'zkSync'}
              handleRadioClick={() => handleRadioClick('zkSync')}
            />
          }
        </div>
        <div className="flex justify-start items-start flex-col gap-5 sm:gap-8 w-full abc bg-black rounded-xl p-5">
          <FloatingLabelInput
            handler={handler}
            name="name"
            placeholder="Ex:Ethereum"
            bgColor="abc bg-black"
            type="text"
            value={formData.name}
            topLabel="Token Name"
          />
          <FloatingLabelInput
            handler={handler}
            name="symbol"
            placeholder="Ex: ETH"
            bgColor="abc bg-black"
            type="text"
            value={formData.symbol}
            topLabel="Token Symbol"
          />
          <FloatingLabelInput
            handler={handler}
            name="decimals"
            placeholder="Ex: 18"
            bgColor="abc bg-black"
            type="number"
            value={formData.decimals}
            topLabel="Token Decimals"
          />
          <FloatingLabelInput
            handler={handler}
            name="supply"
            placeholder="Ex: 100000000"
            bgColor="abc bg-black"
            type="number"
            value={formData.supply}
            topLabel="Token Supply"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
