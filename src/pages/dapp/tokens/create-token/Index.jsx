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

const CreateToken = ({ getContractAddress }) => {
  const path = useLocation();
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false)
  const [btnMsg, setBtnMsg] = useState("Mint Token");
  const [errMsg, setErrMsg] = useState(false);
  const [pending, setPending] = useState(false);

  const { formData } = useContext(formDataContext)
  let mintData = {
    chainId: global.chain.id,
  }

  useEffect(() => {
    if (path.pathname === "/confirm" && pending) {
      setBtnMsg("Pending ")
      setErrMsg("Please wait! Pending... 👌")
      return
    }
    setBtnMsg("Deploy")
  }, [pending])

  const mintToken = async () => {
    setPending(true);
    try {
      console.log(parseUnits(formData.imageCount, 0));
      mintData = {
        ...mintData,
        address: global.launchpad_contract_address,
        abi: launchpadContractABI,
        functionName: 'deployToken',
        args: [
          formData.name,
          formData.symbol,
          Math.floor(formData.decimals),
          formData.supply,
          formData.dataUri,
          parseUnits(formData.fee, 4),
          formData.imageType,
          parseUnits(formData.imageCount, 0),
          formData.website,
          formData.description
        ],
        value: parseUnits("0.1", global.EthDecimals)
      }
      const preparedData = await prepareWriteContract(mintData)
      const writeData = await writeContract(preparedData)
      const txPendingData = waitForTransaction(writeData)
      toast.promise(txPendingData, {
        pending: "Please wait! Pending... 👌",
      });

      const txData = await txPendingData;

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
          toast.error("Unknown Error! Something went wrong.");
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
      <div className="flex justify-end font-medium text-center text-black rounded font-16 h-full mt-6 w-full">
        <ConnectWallet
          setWalletConnected={(val) => {
            if (val === undefined)
              setWalletConnected(false)
            else
              setWalletConnected(val)
          }}
        />
      </div>
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
