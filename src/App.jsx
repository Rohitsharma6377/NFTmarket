import { WagmiConfig, createConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Toaster } from 'react-hot-toast';
import { Web3Provider } from './context/Web3Context';

// ... wagmi config setup

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider>
        <Web3Provider>
          <div>
            {/* Your app components */}
            <Toaster position="top-right" />
          </div>
        </Web3Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App; 