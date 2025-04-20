'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { createPublicClient, http } from 'viem';

// Import your contract ABIs
import NFTContractABI from '@/lib/contracts/NFTContract.json';
import TokenContractABI from '@/lib/contracts/TokenContract.json';

const Web3Context = createContext({} as any);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  
  const [contracts, setContracts] = useState({
    nft: null,
    token: null
  });

  useEffect(() => {
    if (walletClient && publicClient) {
      // Initialize contracts using viem
      // You'll need to update this part based on your contract needs
    }
  }, [walletClient, publicClient]);

  return (
    <Web3Context.Provider value={{
      address,
      publicClient,
      walletClient,
      contracts
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context); 