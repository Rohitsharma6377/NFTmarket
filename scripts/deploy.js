// 

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const MetarupeesToken = await hre.ethers.getContractFactory("MetarupeesToken");
    const token = await MetarupeesToken.deploy();
    await token.deployed();
    console.log(`Token deployed to: ${token.address}`);

    const MetarupeesNFT = await hre.ethers.getContractFactory("MetarupeesNFT");
    const nft = await MetarupeesNFT.deploy();
    await nft.deployed();
    console.log(`NFT Contract deployed to: ${nft.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
