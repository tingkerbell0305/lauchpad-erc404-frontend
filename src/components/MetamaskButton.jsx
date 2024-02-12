// ConnectWalletButton.js

import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // specify the chain IDs you want to support
});

const ConnectWalletButton = () => {
  const { activate, active, account, error } = useWeb3React();

  const connectWallet = async () => {
    try {
      // Use MetaMask's ethereum.request method to connect the wallet
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // After successful connection, activate the injected connector
      await activate(injectedConnector);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      {!active ? (
        <button
          onClick={connectWallet}
          className="rounded-full text-white border border-white uppercase text-sm font-medium px-4 py-2"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-ellipsis text-white overflow-hidden whitespace-nowrap w-full lg:w-[170px] rounded-full border border-white uppercase text-sm font-medium px-4 py-2">
          Connected: {account}
        </div>
      )}
    </>
  );
};

export default ConnectWalletButton;
