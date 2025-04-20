import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAccount, useBalance } from 'wagmi';
import { ethers } from 'ethers';

const Profile = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const [nfts, setNfts] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [claimStatus, setClaimStatus] = useState({
    canClaim: false,
    nextClaimTime: null
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        {/* Profile Header */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.avatar || '/default-avatar.png'}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-primary-500"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-gray-400 mb-4">{address}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Balance</p>
                  <p className="text-xl font-bold text-white">
                    {balance?.formatted} {balance?.symbol}
                  </p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400">NFTs Owned</p>
                  <p className="text-xl font-bold text-white">{nfts.length}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NFT Gallery */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nfts.map((nft) => (
              <motion.div
                key={nft.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white font-bold">{nft.name}</h3>
                  <p className="text-gray-400">{nft.collection}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Daily Claims */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Daily Claims</h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
            {claimStatus.canClaim ? (
              <button
                onClick={handleClaim}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Claim Daily Tokens
              </button>
            ) : (
              <div className="text-gray-400">
                Next claim available in: {formatTimeRemaining(claimStatus.nextClaimTime)}
              </div>
            )}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Profile; 