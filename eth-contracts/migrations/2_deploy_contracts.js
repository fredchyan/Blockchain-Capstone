// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const UdacityERC721Token = artifacts.require("UdacityERC721Token");
const Verifier = artifacts.require("Verifier");

// module.exports = function(deployer) {
//   deployer.deploy(SquareVerifier);
//   deployer.deploy(SolnSquareVerifier);
// };

module.exports = function (deployer) {
  deployer.deploy(UdacityERC721Token);
  deployer.deploy(Verifier);
};
