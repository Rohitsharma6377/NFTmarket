'use client';

import { useWeb3 } from '../../context/Web3Context';
import NFTMinting from '@/components/NFTMinting';
import TokenTransfer from '@/components/TokenTransfer';

export default function ProfilePage() {
  const { address } = useWeb3();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NFTMinting />
        <TokenTransfer />
      </div>
    </div>
  );
} 