import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css'

const config = getDefaultConfig({
  appName: 'Web3 Platform',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains: [mainnet, sepolia],
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
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {children}
            {/* </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider> */}
      </body>
    </html>
  );
}
