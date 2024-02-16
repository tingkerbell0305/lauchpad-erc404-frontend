import { mainnet, goerli, bsc, bscTestnet, arbitrum, arbitrumGoerli, polygon, polygonMumbai, zkSync, zkSyncTestnet } from "wagmi/chains";

export const IS_PRODUCT_MODE = true // TODO

// export const launchpad_contract_address = {
//     mainnet: "0x4F8B7885E970291847283d18511C9c9d50646fD5",
//     testnet: "0x429f54cc1c2dfe0d250b03ad83fd83a5f58b9905",
// }

export const launchpad_contract_address = {
    mainnet: {
        mainnet: "0x4F8B7885E970291847283d18511C9c9d50646fD5",
        bsc: "",
        arbitrum: "",
        polygon: "",
        zkSync: ""
    },
    testnet: {
        georli: "0x429f54cc1c2dfe0d250b03ad83fd83a5f58b9905",
        bscTestnet: "",
        arbitrumGoerli: "",
        polygonMumbai: "",
        zkSyncTestnet: ""
    }
}

export const mainnetChains = [mainnet, bsc, arbitrum, polygon, zkSync]

export const testnetChains = [goerli, bscTestnet, arbitrumGoerli, polygonMumbai, zkSyncTestnet]

export const global = {
    chain: IS_PRODUCT_MODE ? mainnetChains : testnetChains,
    // chain: IS_PRODUCT_MODE ? mainnetChains : testnetChains,
    launchpad_contract_address: IS_PRODUCT_MODE ? launchpad_contract_address.mainnet.mainnet : launchpad_contract_address.testnet.georli,
    PROJECT_ID: 'c278a3db8eed101935395863b318fff7',
    PROJECT: 'Launchpad',
    EthDecimals: 18
    // defaultGas: IS_PRODUCT_MODE ? 0.0005 : 0.0004,
    // REFETCH_INTERVAL: 30000,
    // REFETCH_SECOND: 1000,
    // IUniswapV2Router01Address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    // WethContractAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
}