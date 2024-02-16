import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { global } from "./config/global";
import walletAvatar from "/pandora_avatar.jpg";
import { mainnet, goerli, bsc, bscTestnet, arbitrum, arbitrumGoerli, polygon, polygonMumbai, zkSync, zkSyncTestnet } from "wagmi/chains";

const WalletTheme = {
  colors: {
    modalBackground: 'linear-gradient(to right, #0d8c93, #378880, #0d8c93)',
    // modalBackground: 'linear-gradient(to right, #378880, #49b4a9, #378880)',
    // modalBackground: 'linear-gradient(to right, #4250b5, #8b2eb0, #e15897)',
    // modalBackground: 'linear-gradient(to right, #1e1532, #2d224a, #1e1532)',
    modalText: 'black',
  },
}

const WalletAvatar = () => {
  return <img
    src={walletAvatar}
    alt="avatar"
    width={128}
    height={128}
    style={{ borderRadius: 999 }}
  />;
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  global.chain,
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: global.PROJECT,
  projectId: global.PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} avatar={WalletAvatar} theme={WalletTheme}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </BrowserRouter >
);
