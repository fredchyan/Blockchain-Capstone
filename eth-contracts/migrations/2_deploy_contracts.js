// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");

// module.exports = function(deployer) {
//   deployer.deploy(SquareVerifier);
//   deployer.deploy(SolnSquareVerifier);
// };

module.exports = function (deployer) {
  deployer.deploy(
    ERC721MintableComplete,
    "Udacity",
    "UDA",
    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"
  );
};
