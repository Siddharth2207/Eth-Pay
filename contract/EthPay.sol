// SPDX-License-Identifier: GPL-3.0
// This example code is designed to quickly deploy an example contract using Remix.

pragma solidity ^0.6.0;

import "https://raw.githubusercontent.com/smartcontractkit/chainlink/develop/evm-contracts/src/v0.6/ChainlinkClient.sol";

contract EthPay is ChainlinkClient {
    uint256 public volume;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    constructor() public {
        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10**18; // 0.1 LINK
    }

    function requestVolumeData(string memory id, string memory amount)
        public
        payable
        returns (bytes32 requestId)
    {
        Chainlink.Request memory request =
            buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

        string memory reqStr =
            string(
                abi.encodePacked(
                    "https://bbf59792c3d6.ngrok.io/pay/",
                    id,
                    "/",
                    amount
                )
            );

        request.add("get", reqStr);

        request.add("path", "AMT");

        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, uint256 _volume)
        public
        recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdrawLink() external {
        LinkTokenInterface linkToken =
            LinkTokenInterface(chainlinkTokenAddress());
        require(
            linkToken.transfer(msg.sender, linkToken.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
