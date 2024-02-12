import { mainnet, goerli } from "wagmi/chains";

export const IS_PRODUCT_MODE = false // TODO

export const launchpad_contract_address = {
    mainnet: "",
    testnet: "0x429f54cc1c2dfe0d250b03ad83fd83a5f58b9905"
}

export const global = {
    chain: IS_PRODUCT_MODE ? mainnet : goerli,
    defaultGas: IS_PRODUCT_MODE ? 0.0005 : 0.0004,
    launchpad_contract_address: IS_PRODUCT_MODE ? launchpad_contract_address.mainnet : launchpad_contract_address.testnet,
    PROJECT_ID: 'c278a3db8eed101935395863b318fff7',
    PROJECT: 'launchpad',
    EthDecimals: 18
    // REFETCH_INTERVAL: 30000,
    // REFETCH_SECOND: 1000,
    // IUniswapV2Router01Address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    // WethContractAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
}