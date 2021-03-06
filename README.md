## Contract Address
Verifier: [0x387B389689C3E9Ba6580420680f0358F9614Ce94](https://rinkeby.etherscan.io/address/0x387b389689c3e9ba6580420680f0358f9614ce94)

SolnSquareVerifier: [0xec918dc77552bf2a4fd10933221b874b6ca62245](https://rinkeby.etherscan.io/address/0xec918dc77552bf2a4fd10933221b874b6ca62245)

## OpenSea
[OpenSea MarketPlace Storefront](https://testnets.opensea.io/collection/udacity-dyqx4bjzcp)

## Test & Deployment

```
Blockchain-Capstone/eth-contracts/truffle test
```

1. Deploy verifier contract first
2. Deploy SolnSquareVerifier contract, spcify verifier contract in the address

## ZoKrates Proof Generation
Follow the [tutorial](https://zokrates.github.io/gettingstarted.html), after running `zokrates setup`, backup the keys file, just in case the setup is run again accidentally.

```
zokrates compute-witness -a 11 121
zokrates generate-proof
```
Solution will be in proof.json

## Mint ABI
Using the following format to mint on Remix IDE.

Proof
```
[["0x112600e5375ce994cd84bab1c81a14f2be9d558e497caab019ce975502a208da","0x28645985256cdfa56d5bac17dc0ec6d672e38ebac463928725d3fc059209bffd"],[["0x0b283fa7234bc7405ff4396101ae41089b12a3325b65d60dde0d3eb88530e3c8","0x2bf23b84e45d0ee30549bce12d405dfb8d3bded5ac0d8e78f6e69d0ac412be0c"],["0x03fc8e66f0d1e57c647025a9f42eb42af9e01989d08554972f18150147f2d9b6","0x2f6c77771e43fc1b69ee0ef8bf7ebb266fe2b57e00e036f28e6c6eaa480409e9"]],["0x016ea2270cef2fece4cd44d10b6c0ad99b747166786771d77dfc1d5fed7420fc","0x2c2c157f434347994c82ae22a9e873a72c36efb8d8cacad4d368681b1a2ebefc"]]
```

Input
```
["0x0000000000000000000000000000000000000000000000000000000000000019","0x0000000000000000000000000000000000000000000000000000000000000001"]
```

## Full Contract ABI
Verifier
```
[{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct Verifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"verifyTx","outputs":[{"internalType":"bool","name":"r","type":"bool"}],"stateMutability":"view","type":"function"}]
```

SolnSquareVerifier
```
[{"inputs":[{"internalType":"address","name":"verifierContractAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"prover","type":"address"}],"indexed":false,"internalType":"struct SolnSquareVerifier.Solution","name":"newSolution","type":"tuple"}],"name":"SolutionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct Verifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]
```
## Verisions
- Node.js v17.8.0
- npm 8.5.5
- openzeppelin 4.5.0
- truffle 5.5.9
- solc 0.8.7
- ganache 2.5.4