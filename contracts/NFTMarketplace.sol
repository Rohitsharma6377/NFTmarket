// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketplace is ERC721URIStorage, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    
    // Counter for  ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    
    // Counter for token IDs
    Counters.Counter private _tokenIds;
    
    // Counter for marketplace items
    Counters.Counter private _itemsSold;
    
    // Platform fee percentage (in basis points, 100 = 1%)
    uint256 public platformFeePercent;
    
    // Address where platform fees are sent
    address payable public feeRecipient;
    
    // Mapping from token ID to listing price
    mapping(uint256 => uint256) private _listingPrices;
    
    // Mapping from token ID to whether it's for sale
    mapping(uint256 => bool) private _isForSale;
    
    // Events
    event NFTCreated(uint256 indexed tokenId, address creator, string tokenURI);
    event NFTListed(uint256 indexed tokenId, address seller, uint256 price);
    event NFTSold(uint256 indexed tokenId, address seller, address buyer, uint256 price);
    event NFTUnlisted(uint256 indexed tokenId, address seller);
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 _platformFeePercent,
        address payable _feeRecipient
    ) ERC721(name, symbol) Ownable(msg.sender) {
        platformFeePercent = _platformFeePercent;
        feeRecipient = _feeRecipient;
    }
    
    /**
     * @dev Creates a new NFT
     * @param tokenURI The token URI for the new NFT
     * @return The ID of the newly created NFT
     */
    function createNFT(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        emit NFTCreated(newTokenId, msg.sender, tokenURI);
        
        return newTokenId;
    }
    
    /**
     * @dev Lists an NFT for sale
     * @param tokenId The ID of the NFT to list
     * @param price The listing price in wei
     */
    function listNFT(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(price > 0, "Price must be greater than zero");
        
        _listingPrices[tokenId] = price;
        _isForSale[tokenId] = true;
        
        emit NFTListed(tokenId, msg.sender, price);
    }
    
    /**
     * @dev Removes an NFT from sale
     * @param tokenId The ID of the NFT to unlist
     */
    function unlistNFT(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(_isForSale[tokenId], "NFT not listed");
        
        _isForSale[tokenId] = false;
        
        emit NFTUnlisted(tokenId, msg.sender);
    }
    
    /**
     * @dev Buys an NFT
     * @param tokenId The ID of the NFT to buy
     */
    function buyNFT(uint256 tokenId) public payable {
        address seller = ownerOf(tokenId);
        uint256 price = _listingPrices[tokenId];
        
        require(_isForSale[tokenId], "NFT not for sale");
        require(msg.value >= price, "Insufficient funds");
        require(seller != msg.sender, "Cannot buy your own NFT");
        
        // Calculate platform fee
        uint256 platformFee = (price * platformFeePercent) / 10000;
        uint256 sellerAmount = price - platformFee;
        
        // Transfer ownership
        _transfer(seller, msg.sender, tokenId);
        
        // Update marketplace state
        _isForSale[tokenId] = false;
        _itemsSold.increment();
        
        // Transfer funds
        payable(seller).transfer(sellerAmount);
        feeRecipient.transfer(platformFee);
        
        // Refund excess payment
        if (msg.value > price) {
            payable(msg.sender).transfer(msg.value - price);
        }
        
        emit NFTSold(tokenId, seller, msg.sender, price);
    }
    
    /**
     * @dev Gets the listing price of an NFT
     * @param tokenId The ID of the NFT
     * @return The listing price of the NFT
     */
    function getListingPrice(uint256 tokenId) public view returns (uint256) {
        return _listingPrices[tokenId];
    }
    
    /**
     * @dev Checks if an NFT is for sale
     * @param tokenId The ID of the NFT
     * @return Whether the NFT is for sale
     */
    function isForSale(uint256 tokenId) public view returns (bool) {
        return _isForSale[tokenId];
    }
    
    /**
     * @dev Gets the total number of NFTs sold
     * @return The total number of NFTs sold
     */
    function getTotalSold() public view returns (uint256) {
        return _itemsSold.current();
    }
    
    /**
     * @dev Updates the platform fee percentage
     * @param _platformFeePercent The new platform fee percentage
     */
    function setPlatformFeePercent(uint256 _platformFeePercent) public onlyOwner {
        platformFeePercent = _platformFeePercent;
    }
    
    /**
     * @dev Updates the fee recipient address
     * @param _feeRecipient The new fee recipient address
     */
    function setFeeRecipient(address payable _feeRecipient) public onlyOwner {
        feeRecipient = _feeRecipient;
    }
    
    // Override required functions due to multiple inheritance
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }
    
    function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }
    
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}

