

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MetarupeesNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    mapping(uint256 => bool) public isForSale;
    mapping(uint256 => uint256) public salePrice;

    constructor() ERC721("Metarupees NFT", "MRPNFT") {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 newItemId = _tokenIdCounter;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function putNFTForSale(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        isForSale[tokenId] = true;
        salePrice[tokenId] = price;
    }

    function buyNFT(uint256 tokenId) public payable {
        require(isForSale[tokenId], "NFT not for sale");
        require(msg.value >= salePrice[tokenId], "Insufficient funds");
        address seller = ownerOf(tokenId);
        payable(seller).transfer(msg.value);
        _transfer(seller, msg.sender, tokenId);
        isForSale[tokenId] = false;
    }
}