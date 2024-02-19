import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import StepBox from "../../../../components/StepBox";

import { ConnectWallet } from "../../../../components/ConnectWallet";
import { useState, useEffect } from "react";
import { global } from "../../../../config/global";
import launchpadContractABI from "../../../../abi/launchpadContractAbi.json";
import { parseUnits } from "viem";
import { toast } from "react-toastify";
import { writeContract, prepareWriteContract, waitForTransaction } from "@wagmi/core"
import { formDataContext } from "../../../../contexts/formDataContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNetwork } from "wagmi";

const CreateToken = ({ getContractAddress }) => {
  const path = useLocation();
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false)
  const [btnMsg, setBtnMsg] = useState("Mint Token");
  // const [errMsg, setErrMsg] = useState(false);
  const [pending, setPending] = useState(false);

  const { chain } = useNetwork();
  const { formData } = useContext(formDataContext)

  // let mintData = {}
  //   chainId: chain.id,
  // }

  const setMintData = () => {
    if (chain) {
      mintData = {
        chainId: chain.id,
      }
      if (chain.id === 1) {
        mintData = {
          ...mintData,
          address: global.launchpad_contract_address.mainnet,
          value: parseUnits("0.1", global.Decimals)
        }
      } else if (chain.id === 56) {
        mintData = {
          ...mintData,
          address: global.launchpad_contract_address.bsc,
          value: parseUnits("0.15", global.Decimals)
        }
      } else if (chain.id === 42161) {
        mintData = {
          ...mintData,
          address: global.launchpad_contract_address.arbitrum,
          value: parseUnits("0.1", global.Decimals)
        }
      } else if (chain.id === 137) {
        mintData = {
          ...mintData,
          address: global.launchpad_contract_address.polygon,
          value: parseUnits("5", global.Decimals)
        }
      } else if (chain.id === 324) {
        mintData = {
          ...mintData,
          address: global.launchpad_contract_address.zkSync,
          value: parseUnits("0.1", global.Decimals)
        }
      }
    }
  }

  useEffect(() => {
    if (path.pathname === "/confirm" && pending) {
      setBtnMsg("Pending ")
      // setErrMsg("Please wait! Pending... 👌")
      return
    }
    setBtnMsg("Deploy")
  }, [pending])

  const mintToken = async () => {
    let mintData = {}
    setPending(true);
    try {
      // console.log("type", typeof formData.imageCount);
      // console.log("type", typeof formData.decimals);
      // console.log("type", typeof formData.fee);
      // console.log("before", parseUnits(formData.imageCount, 0));

      // setMintData();

      if (chain) {
        mintData = {
          chainId: chain.id,
        }
        if (chain.id === 1) {
          mintData = {
            ...mintData,
            address: global.launchpad_contract_address.mainnet,
            value: parseUnits("0.1", global.Decimals)
          }
        } else if (chain.id === 56) {
          mintData = {
            ...mintData,
            address: global.launchpad_contract_address.bsc,
            value: parseUnits("0.15", global.Decimals)
          }
        } else if (chain.id === 42161) {
          mintData = {
            ...mintData,
            address: global.launchpad_contract_address.arbitrum,
            value: parseUnits("0.1", global.Decimals)
          }
        } else if (chain.id === 137) {
          mintData = {
            ...mintData,
            address: global.launchpad_contract_address.polygon,
            value: parseUnits("50", global.Decimals)
          }
        } else if (chain.id === 324) {
          mintData = {
            ...mintData,
            address: global.launchpad_contract_address.zkSync,
            value: parseUnits("0.1", global.Decimals)
          }
        }
      }

      // console.log('MintData >>>>>>>111', mintData);
      mintData = {
        ...mintData,
        // address: global.launchpad_contract_address,
        abi: launchpadContractABI,
        functionName: 'deployToken',
        args: [
          formData.name,
          formData.symbol,
          parseUnits(formData.decimals, 0),
          formData.supply,
          formData.dataUri,
          parseUnits(formData.fee.toString(), 4),
          formData.imageType,
          parseUnits(formData.imageCount, 0),
          formData.website,
          formData.description
        ],
        // value: parseUnits("0.1", global.Decimals)
      }
      // console.log('MintData >>>>>>>222', mintData);

      // console.log("mintData", mintData);
      const preparedData = await prepareWriteContract(mintData);
      console.log("preparedData", preparedData);
      const writeData = await writeContract(preparedData);
      // console.log("writeData", writeData);
      const txPendingData = waitForTransaction(writeData);
      // console.log("txPendingData", txPendingData);
      toast.promise(txPendingData, {
        pending: "Please wait! Pending... 👌",
      });

      const txData = await txPendingData;
      console.log(txData);

      if (txData && txData.status === "success") {
        toast.success(`Successfully deployed!`)
        getContractAddress(txData.logs[0].address);
      } else {
        toast.error("Error! Deployment is failed!");
      }
    } catch (error) {
      // console.log(error);
      try {
        if (error?.shortMessage) {
          toast.error(error?.shortMessage);
        } else {
          toast.error("Deployment is failed!");
        }
      } catch (error) {
        toast.error("Error! Something went wrong.");
      }
    }
    setPending(false);
    return;
  }

  const handleButton = () => {
    if (formData) {
      if (path.pathname === "/") {
        if (formData.name === "" || formData.symbol === "" || formData.decimals === "" || formData.supply === "") {
          toast.warn(`Please input token information!`);
        } else {
          navigate("/links");
        }
      } else if (path.pathname === "/links") {
        if (formData.fee === "" && formData.description === "" || formData.website === "" || formData.dataUri === "" || formData.imageCount === "" || formData.imageType === "") {
          toast.warn(`Please input token's addition information!`);
        } else if (Number(formData.fee) < 0.3) {
          toast.warn('Deploy fee value must be equal or greater than 0.3!');
        } else {
          navigate("/confirm");
        }
      } else if (path.pathname === "/confirm") {
        if (walletConnected) {
          if (formData.name === "" ||
            formData.symbol === "" ||
            formData.decimals === "" ||
            formData.supply === "" ||
            formData.fee === "" ||
            formData.description === "" ||
            formData.website === "" ||
            formData.dataUri === "" ||
            formData.imageCount === "" ||
            formData.imageType === "") {
            toast.warn('Please set token information!')
          } else {
            mintToken();
          }
        }
        else
          toast.warn("Please connect wallet!")
      }
    } else {
      toast.warn("Please set token information!")
    }
  }

  return (
    <div className="w-full flex justify-start items-center mt-4 flex-col gap-5">
      {/* {showInfoModal && <InfoModal setModal={setShowInfoModal} />} */}
      {/* <div className="flex justify-between font-medium text-center text-black rounded font-16 h-full mx-auto mt-6 w-full"> */}
      <div className="justify-between items-center w-full my-5 max-w-[1300px] mx-auto flex flex-row gap-4">
        <div className="flex justify-start items-start sm:w-full">
          <img
            src="/logo.png"
            className="w-24 object-cover rounded-lg aspect-square"
            alt=""
          />
        </div>
        <label className="sm:block hidden text-3xl font-semibold  text-green-300 w-full text-center">
          ERC404 Token LaunchPad
        </label>
        <div className="w-full">
          <ConnectWallet
            setWalletConnected={(val) => {
              if (val === undefined)
                setWalletConnected(false)
              else
                setWalletConnected(val)
            }}
          />
        </div>
      </div>
      <label className="sm:hidden text-3xl font-semibold  text-green-300 w-full text-center">
        ERC404 Token LaunchPad
      </label>
      <div className="grid grid-cols-2 gap-5 md:gap-0 md:flex justify-between max-w-[1200px] items-center w-full relative isolate">
        <div className="abc bg-white md:block hidden w-[90%] h-0.5 absolute top-[10px] left-[51%] -translate-x-1/2 -z-10"></div>
        <StepBox
          name="Basic Info"
          desc="Lets start with the basics"
          num={1}
          activeUrl="/"
        />
        {/* <StepBox
          name="Functions"
          desc="Choose and Setup your token functions"
          num={2}
          activeUrl="/functions"
        /> */}
        <StepBox
          name="Logo & Links"
          desc="Make this token your own!"
          num={2}
          activeUrl="/links"
        />
        <StepBox
          name="Confirm & Mint"
          desc="Deploy your token!"
          num={3}
          activeUrl="/confirm"
        />
      </div>

      <div className="w-full flex flex-col mt-10">
        <Outlet />
        <div
          className={`${path.pathname === "/" ? "justify-end" : "justify-between"
            } w-full my-5 max-w-[1300px] mx-auto flex flex-wrap gap-4`}
        >
          {path.pathname !== "/" ? (
            <Link
              to={
                path.pathname === "/links"
                  ? "/"
                  : path.pathname === "/confirm"
                    ? "/links"
                    : "/"
              }
              className=" px-5 h-[45px] rounded-lg border border-white text-white text-lg font-semibold grid place-items-center sm:self-end hover:bg-black hover:text-white transition-all duration-300"
            >
              Back
            </Link>
          ) : null}

          {path.pathname ? (
            <button
              className="bg-yellow-300 px-5 h-[45px] rounded-lg text-black text-lg font-semibold grid place-items-center sm:self-end hover:opacity-40 transition-all duration-300"
              onClick={handleButton}
            >
              {/* {path.pathname === "/confirm" ? btnMsg : "Next"} */}
              {path.pathname === "/confirm" || pending ?
                <div>
                  {btnMsg}
                  {pending ? <FontAwesomeIcon icon={faSpinner} size="sm" className="animate-spin" /> : <></>}
                </div> : "Next"}
            </button>
          ) : null}
        </div>
      </div>
    </div >
  );
};

export default CreateToken;
