import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider, createClient, configureChains } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'; // Corrected import for jsonRpcProvider
import './globals.css';

// Define your custom RPC URL (e.g., from Infura, Alchemy, etc.)
const rpcUrl = 'https://mainnet.infura.io/v3/4e070ec2073b40c091679426358d135f'; // Replace with your RPC URL

// Configure chains and providers using jsonRpcProvider
const { chains, provider } = configureChains(
  [mainnet, sepolia], // Chains you want to use
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpcUrl,
      }),
    }),
  ]
);

// Create the Wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

const queryClient = new QueryClient();

export const metadata = {
  title: 'Your Web3 App',
  description: 'Web3 application with NFT and token functionality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider client={wagmiClient}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()}>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
