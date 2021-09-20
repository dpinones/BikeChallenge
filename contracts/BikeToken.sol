// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error BikeError();

contract BikeToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Bike", "BKE") {
        _mint(msg.sender, initialSupply);
    }

    function throwError() external pure {
        revert BikeError();
    }
}
