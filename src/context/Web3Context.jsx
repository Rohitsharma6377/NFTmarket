import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import { ethers } from 'ethers';

// Import your contract ABIs
import NFTContractABI from '../contracts/NFTContract.json';
import TokenContractABI from '../contracts/TokenContract.json';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const provider = useProvider();
  const { data: signer } = useSigner();
  
  const [contracts, setContracts] = useState({
    nft: null,
    token: null
  });

  useEffect(() => {
    if (signer) {
      const nftContract = new ethers.Contract(
        process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        NFTContractABI,
        signer
      );
      
      const tokenContract = new ethers.Contract(
        process.env.REACT_APP_TOKEN_CONTRACT_ADDRESS,
        TokenContractABI,
        signer
      );

      setContracts({
        nft: nftContract,
        token: tokenContract
      });
    }
  }, [signer]);

  return (
    <Web3Context.Provider value={{
      address,
      chain,
      provider,
      signer,
      contracts
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context); 