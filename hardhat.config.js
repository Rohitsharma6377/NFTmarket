// 
// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers"); // Ensure this is included
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     sepolia: {
//       url: process.env.ALCHEMY_SEPOLIA_URL, // Replace with your Alchemy/Infura URL
//       accounts: [process.env.PRIVATE_KEY]
//     }
//   }
// };
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
