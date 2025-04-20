import React, { useState, useEffect } from 'react';
import { useWeb3 } from '../context/Web3Context';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const AdminContractManagement = () => {
  const { contracts } = useWeb3();
  const [tokenInfo, setTokenInfo] = useState({
    totalSupply: '0',
    circulatingSupply: '0',
    holders: '0'
  });
  const [nftInfo, setNftInfo] = useState({
    totalSupply: '0',
    holders: '0'
  });

  const [newMinterAddress, setNewMinterAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchContractInfo();
  }, [contracts]);

  const fetchContractInfo = async () => {
    if (!contracts.token || !contracts.nft) return;

    try {
      const [
        tokenSupply,
        tokenCirculating,
        nftSupply
      ] = await Promise.all([
        contracts.token.totalSupply(),
        contracts.token.circulatingSupply(),
        contracts.nft.totalSupply()
      ]);

      setTokenInfo({
        totalSupply: tokenSupply.toString(),
        circulatingSupply: tokenCirculating.toString(),
        holders: '0' // You'll need to implement this
      });

      setNftInfo({
        totalSupply: nftSupply.toString(),
        holders: '0' // You'll need to implement this
      });
    } catch (error) {
      console.error('Error fetching contract info:', error);
    }
  };

  const addMinter = async () => {
    if (!contracts.nft || !newMinterAddress) return;

    try {
      setIsLoading(true);
      const tx = await contracts.nft.grantRole(
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes('MINTER_ROLE')),
        newMinterAddress
      );
      await tx.wait();
      toast.success('Minter role granted successfully');
    } catch (error) {
      console.error('Error adding minter:', error);
      toast.error('Failed to grant minter role');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Token Stats */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Token Statistics</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Total Supply</p>
              <p className="text-2xl font-bold text-white">{tokenInfo.totalSupply}</p>
            </div>
            <div>
              <p className="text-gray-400">Circulating Supply</p>
              <p className="text-2xl font-bold text-white">{tokenInfo.circulatingSupply}</p>
            </div>
            <div>
              <p className="text-gray-400">Holders</p>
              <p className="text-2xl font-bold text-white">{tokenInfo.holders}</p>
            </div>
          </div>
        </div>

        {/* NFT Stats */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">NFT Statistics</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Total Supply</p>
              <p className="text-2xl font-bold text-white">{nftInfo.totalSupply}</p>
            </div>
            <div>
              <p className="text-gray-400">Holders</p>
              <p className="text-2xl font-bold text-white">{nftInfo.holders}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contract Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Contract Management</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Add Minter Role</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={newMinterAddress}
                onChange={(e) => setNewMinterAddress(e.target.value)}
                placeholder="Address"
                className="flex-1 bg-gray-700/50 rounded-lg px-4 py-3 text-white"
              />
              <button
                onClick={addMinter}
                disabled={isLoading}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-bold transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Add Minter'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminContractManagement; 