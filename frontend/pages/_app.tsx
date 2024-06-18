import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { arbitrum, base, mainnet, optimism, polygon, sepolia, hardhat } from 'wagmi/chains'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

const config = getDefaultConfig({
    appName: 'RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [hardhat],
    ssr: true,
})

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
                <RainbowKitProvider>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default MyApp