import React, { useState } from 'react';
import { useWeb3 } from '../context/Web3Context';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const NFTMinting = () => {
  const { contracts, address } = useWeb3();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [metadata, setMetadata] = useState({
    name: '',
    description: ''
  });

  const handleMint = async () => {
    if (!contracts.nft || !address) return;
    
    try {
      setIsLoading(true);
      
      // Upload file to IPFS (you'll need to implement this)
      const ipfsHash = await uploadToIPFS(selectedFile);
      
      // Create metadata
      const tokenURI = await createMetadata({
        ...metadata,
        image: `ipfs://${ipfsHash}`
      });

      // Mint NFT
      const tx = await contracts.nft.mint(address, tokenURI);
      await tx.wait();
      
      toast.success('NFT minted successfully!');
    } catch (error) {
      console.error('Minting error:', error);
      toast.error('Failed to mint NFT');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Mint New NFT</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-2">NFT Name</label>
          <input
            type="text"
            value={metadata.name}
            onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
            className="w-full bg-gray-700/50 rounded-lg px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Description</label>
          <textarea
            value={metadata.description}
            onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
            className="w-full bg-gray-700/50 rounded-lg px-4 py-3 text-white"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Image</label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full text-gray-400"
            accept="image/*"
          />
        </div>

        <button
          onClick={handleMint}
          disabled={isLoading || !selectedFile}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-bold transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Minting...' : 'Mint NFT'}
        </button>
      </div>
    </motion.div>
  );
};

export default NFTMinting; 