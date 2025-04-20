import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AdminPanel = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalNFTs: 0,
    totalTokensClaimed: 0
  });
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch admin data
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setStats(response.data.stats);
        setUsers(response.data.users);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value={stats.totalUsers}
            icon="👥"
          />
          <StatsCard
            title="Total NFTs"
            value={stats.totalNFTs}
            icon="🖼️"
          />
          <StatsCard
            title="Tokens Claimed"
            value={stats.totalTokensClaimed}
            icon="🪙"
          />
        </div>

        {/* User Management */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3">User</th>
                  <th className="text-left py-3">Email</th>
                  <th className="text-left py-3">Wallet</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-700/50">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar || '/default-avatar.png'}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        {user.name}
                      </div>
                    </td>
                    <td className="py-3">{user.email}</td>
                    <td className="py-3">{truncateAddress(user.walletAddress)}</td>
                    <td className="py-3">
                      <button
                        onClick={() => handleUserAction(user._id)}
                        className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-gray-400 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-white">{value}</p>
  </motion.div>
);

export default AdminPanel; 