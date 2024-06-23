declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS: `0x{string}`
        NEXT_PUBLIC_ENV: 'localhost' | 'testnet'
        NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: string
    }
}
