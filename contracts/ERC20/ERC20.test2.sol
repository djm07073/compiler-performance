// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20_TEST2 is ERC20 {
    constructor() ERC20("ERC20_TEST1", "TEST1") {
        _mint(msg.sender, 100 * 1e18);
    }

    function mint() external {
        _mint(msg.sender, 100 * 1e18);
    }
}
