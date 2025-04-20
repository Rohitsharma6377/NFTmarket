

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract MetarupeesToken is ERC20, Ownable, ERC20Burnable, Pausable {
    uint256 public constant MAX_SUPPLY = 100000000 * 10**18; // 100 Million Token Supply
    uint256 public constant DAILY_MINT_LIMIT = 2 * 10**18; // 2 tokens per day
    uint256 public constant TRANSACTION_FEE = 1 * 10**16; // 0.01 MRP fee
    mapping(address => uint256) public stakedBalances;
    mapping(address => uint256) public stakingStart;
    mapping(address => uint256) public lastMintTimestamp;
    mapping(address => bool) public isBlacklisted;
    uint256 public stakingRate = 5; // 5% Annual Interest
    address public feeCollector;
    
    constructor(address _feeCollector) ERC20("Metarupees", "MRP") {
        _mint(msg.sender, MAX_SUPPLY);
        feeCollector = _feeCollector;
    }

    modifier notBlacklisted() {
        require(!isBlacklisted[msg.sender], "Address is blacklisted");
        _;
    }

    function stakeTokens(uint256 _amount) external notBlacklisted {
        require(balanceOf(msg.sender) >= _amount, "Insufficient balance");
        _burn(msg.sender, _amount);
        stakedBalances[msg.sender] += _amount;
        stakingStart[msg.sender] = block.timestamp;
    }

    function unstakeTokens() external notBlacklisted {
        require(stakedBalances[msg.sender] > 0, "No staked tokens");
        uint256 rewards = (stakedBalances[msg.sender] * stakingRate * (block.timestamp - stakingStart[msg.sender])) / (365 days * 100);
        uint256 totalAmount = stakedBalances[msg.sender] + rewards;
        stakedBalances[msg.sender] = 0;
        _mint(msg.sender, totalAmount);
    }

    function mintLimitedTokens() external notBlacklisted {
        require(block.timestamp - lastMintTimestamp[msg.sender] >= 1 days, "Minting limit reached");
        _mint(msg.sender, DAILY_MINT_LIMIT);
        lastMintTimestamp[msg.sender] = block.timestamp;
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
}
