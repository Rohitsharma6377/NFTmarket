import React, { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'ethers/lib/utils';
import { motion } from 'framer-motion';

const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const { config } = usePrepareContractWrite({
    address: 'YOUR_TOKEN_CONTRACT_ADDRESS',
    abi: tokenABI,
    functionName: 'transfer',
    args: [recipient, parseEther(amount || '0')],
  });

  const { write: transfer, isLoading, isSuccess } = useContractWrite(config);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Transfer Tokens</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-2">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-gray-700/50 rounded-lg px-4 py-3 text-white"
            placeholder="0x..."
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-700/50 rounded-lg px-4 py-3 text-white"
            placeholder="0.0"
          />
        </div>
        <button
          onClick={() => transfer?.()}
          disabled={isLoading}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-bold transition-colors"
        >
          {isLoading ? 'Transferring...' : 'Transfer Tokens'}
        </button>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center"
          >
            Transfer successful!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TokenTransfer; 