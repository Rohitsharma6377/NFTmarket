
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MetaRupees is ERC20, Ownable, ERC20Burnable, Pausable {
    uint256 public constant MAX_SUPPLY = 100000000 * 10**18; // 100 Million Token Supply
    uint256 public constant DAILY_MINT_LIMIT = 2 * 10**18; // Limit of 2 tokens per day
    uint256 public constant CRYPTO_MINT_LIMIT = 5 * 10**18; // Crypto minting limit per day
    uint256 public constant TRANSACTION_FEE = 1 * 10**16; // 0.01 MRP transaction fee
    mapping(address => uint256) public stakedBalances;
    mapping(address => uint256) public stakingStart;
    mapping(address => uint256) public lastMintTimestamp;
    mapping(address => uint256) public lastCryptoMintTimestamp;
    mapping(address => bool) public isBlacklisted;
    uint256 public stakingRate = 5; // 5% Annual Interest
    address public feeCollector;
    mapping(address => uint256) public totalBalances;

    constructor(address _feeCollector) ERC20("MetaRupees", "MRP") {
        _mint(msg.sender, MAX_SUPPLY);
        feeCollector = _feeCollector;
    }

    modifier notBlacklisted() {
        require(!isBlacklisted[msg.sender], "Address is blacklisted");
        _;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function stakeTokens(uint256 _amount) external notBlacklisted {
        require(balanceOf(msg.sender) >= _amount, "Insufficient balance");
        _burn(msg.sender, _amount);
        stakedBalances[msg.sender] += _amount;
        stakingStart[msg.sender] = block.timestamp;
    }

    function unstakeTokens() external notBlacklisted {
        require(stakedBalances[msg.sender] > 0, "No staked tokens");
        uint256 stakedTime = block.timestamp - stakingStart[msg.sender];
        uint256 rewards = (stakedBalances[msg.sender] * stakingRate * stakedTime) / (365 days * 100);
        uint256 totalAmount = stakedBalances[msg.sender] + rewards;
        stakedBalances[msg.sender] = 0;
        _mint(msg.sender, totalAmount);
    }

    function mintLimitedTokens() external notBlacklisted {
        require(block.timestamp - lastMintTimestamp[msg.sender] >= 1 days, "You can mint only twice per day");
        _mint(msg.sender, DAILY_MINT_LIMIT);
        lastMintTimestamp[msg.sender] = block.timestamp;
    }

    function mintCrypto() external notBlacklisted {
        require(block.timestamp - lastCryptoMintTimestamp[msg.sender] >= 1 days, "You can mint crypto only once per day");
        _mint(msg.sender, CRYPTO_MINT_LIMIT);
        lastCryptoMintTimestamp[msg.sender] = block.timestamp;
    }

    function blacklistAddress(address _address, bool _status) external onlyOwner {
        isBlacklisted[_address] = _status;
    }

    function transfer(address recipient, uint256 amount) public override notBlacklisted returns (bool) {
        uint256 fee = (amount * TRANSACTION_FEE) / 10**18;
        uint256 amountAfterFee = amount - fee;
        _transfer(msg.sender, feeCollector, fee);
        _transfer(msg.sender, recipient, amountAfterFee);
        return true;
    }

    function burn(uint256 amount) public override onlyOwner {
        _burn(msg.sender, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    function fetchTotalBalance(address user) external view returns (uint256) {
        return balanceOf(user) + stakedBalances[user];
    }
}

contract MetaRupeesNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    mapping(uint256 => bool) public isForSale;
    mapping(uint256 => uint256) public salePrice;

    constructor() ERC721("MetaRupees NFT", "MRPNFT") {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 newItemId = _tokenIdCounter;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function putNFTForSale(uint256 tokenId, uint256 price) public onlyOwner {
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
