// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./ERC721Mintable.sol";
import "./verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is UdacityERC721Token {
    Verifier verifier;

    constructor(address verifierContractAddr) {
        verifier = Verifier(verifierContractAddr);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address prover;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => uint256) private solutionIndices;

    mapping(bytes32 => Solution) private solutionSubmitted;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(Solution newSolution);

    // TODO Create a function to add the solutions to the array and emit the event
    function _addSolution(bytes32 solutionKey) internal {
        solutionSubmitted[solutionKey] = Solution(solutions.length, msg.sender);
        Solution memory newSolution = Solution(solutions.length, msg.sender);
        solutionIndices[solutionKey] = solutions.length;
        solutions.push(newSolution);
        emit SolutionAdded(newSolution);
    }

    function getSolutionKey(uint256[2] memory input)
        internal
        pure
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(input));
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint(Verifier.Proof memory proof, uint256[2] memory input)
        public
        returns (bool)
    {
        bytes32 solutionKey = getSolutionKey(input);
        // if (solutions.length > 0) {
        //     require(
        //         solutions[solutionIndices[solutionKey]].prover == address(0),
        //         "Solution already submitted."
        //     );
        // }
        require(
            solutionSubmitted[solutionKey].prover == address(0),
            "Solution already submitted."
        );
        require(verifier.verifyTx(proof, input), "Incorrect proof submitted.");
        uint256 tokenId = solutions.length;
        _addSolution(solutionKey);
        super._mint(msg.sender, tokenId);
        super._setTokenURI(tokenId);
        return true;
    }
}
