// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Token.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenFactory is Ownable {
    // Events
    event TokenCreated(address indexed tokenAddress, string name, string symbol, address creator);
    
    // Platform fee for creating a token
    uint256 public creationFee;
    
    // Address of the platform token used for payment
    address public platformToken;
    
    // Array to store all created tokens
    address[] public createdTokens;
    
    // Mapping from creator to their tokens
    mapping(address => address[]) public creatorTokens;
    
    constructor(uint256 _creationFee, address _platformToken) Ownable(msg.sender) {
        creationFee = _creationFee;
        platformToken = _platformToken;
    }
    
    /**
     * @dev Creates a new ERC20 token
     * @param name The name of the token
     * @param symbol The symbol of the token
     * @param initialSupply The initial supply of the token
     * @param maxSupply The maximum supply of the token
     * @return The address of the newly created token
     */
    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 maxSupply
    ) public returns (address) {
        // Transfer creation fee from creator to this contract
        require(
            IERC20(platformToken).transferFrom(msg.sender, address(this), creationFee),
            "Fee transfer failed"
        );
        
        // Create new token
        CryptoVerseToken newToken = new CryptoVerseToken(
            name,
            symbol,
            initialSupply,
            maxSupply,
            msg.sender
        );
        
        // Store token address
        address tokenAddress = address(newToken);
        createdTokens.push(tokenAddress);
        creatorTokens[msg.sender].push(tokenAddress);
        
        emit TokenCreated(tokenAddress, name, symbol, msg.sender);
        
        return tokenAddress;
    }
    
    /**
     * @dev Gets all tokens created by a specific address
     * @param creator The address of the creator
     * @return An array of token addresses created by the creator
     */
    function getTokensByCreator(address creator) public view returns (address[] memory) {
        return creatorTokens[creator];
    }
    
    /**
     * @dev Gets the total number of tokens created
     * @return The total number of tokens created
     */
    function getTotalTokens() public view returns (uint256) {
        return createdTokens.length;
    }
    
    /**
     * @dev Updates the creation fee
     * @param _creationFee The new creation fee
     */
    function setCreationFee(uint256 _creationFee) public onlyOwner {
        creationFee = _creationFee;
    }
    
    /**
     * @dev Updates the platform token address
     * @param _platformToken The new platform token address
     */
    function setPlatformToken(address _platformToken) public onlyOwner {
        platformToken = _platformToken;
    }
    
    /**
     * @dev Withdraws platform tokens from the contract
     * @param amount The amount to withdraw
     */
    function withdrawTokens(uint256 amount) public onlyOwner {
        require(
            IERC20(platformToken).transfer(owner(), amount),
            "Transfer failed"
        );
    }
}

// Interface for ERC20 token
interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

