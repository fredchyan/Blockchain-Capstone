// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Verifier = artifacts.require("Verifier");

contract("TestSolnSquareVerifier", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("test proof validations to create nft", function () {
    beforeEach(async function () {
      this.verifierContract = await Verifier.new({ from: account_one });
      this.solnSquareVerifierContract = await SolnSquareVerifier.new(
        this.verifierContract.address,
        { from: account_one }
      );
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("should be able to add a new solution", async function () {
      // 25
      let res0 = await this.solnSquareVerifierContract.mint(
        {
          a: [
            "0x112600e5375ce994cd84bab1c81a14f2be9d558e497caab019ce975502a208da",
            "0x28645985256cdfa56d5bac17dc0ec6d672e38ebac463928725d3fc059209bffd",
          ],
          b: [
            [
              "0x0b283fa7234bc7405ff4396101ae41089b12a3325b65d60dde0d3eb88530e3c8",
              "0x2bf23b84e45d0ee30549bce12d405dfb8d3bded5ac0d8e78f6e69d0ac412be0c",
            ],
            [
              "0x03fc8e66f0d1e57c647025a9f42eb42af9e01989d08554972f18150147f2d9b6",
              "0x2f6c77771e43fc1b69ee0ef8bf7ebb266fe2b57e00e036f28e6c6eaa480409e9",
            ],
          ],
          c: [
            "0x016ea2270cef2fece4cd44d10b6c0ad99b747166786771d77dfc1d5fed7420fc",
            "0x2c2c157f434347994c82ae22a9e873a72c36efb8d8cacad4d368681b1a2ebefc",
          ],
        },
        [
          "0x0000000000000000000000000000000000000000000000000000000000000019",
          "0x0000000000000000000000000000000000000000000000000000000000000001",
        ],
        { from: account_one }
      );
      // 113569
      let res1 = await this.solnSquareVerifierContract.mint(
        {
          a: [
            "0x1f070f338f9d5e24089c6a159d930a660142d1279d78407a279eaaca37a36f0d",
            "0x0427a77a772d97a60fa01062d19bd1631398433cc10d64f1166cfcfeae66f1a5",
          ],
          b: [
            [
              "0x13ac6bdcb049f8353baad81d7943131ecae27ce10534f2bfab324b129f67e231",
              "0x2974fb22110278e1850dfdc2568eae6415663c32266eca1014741744503683ac",
            ],
            [
              "0x0ee502e77189ed7cc54d1789adf40a3908cf7ce91b56fff2fca9f0e6eeb6053c",
              "0x245d3fdb1ef2fcc9edc8d330df2bf314b59573a9032389548ce3c4df57d8b4a8",
            ],
          ],
          c: [
            "0x185f056d649052681230c19dfdfb667b93f5e4614e9f4551da03e5bda89892ac",
            "0x2a03a89675100cded2c42488194782b657e966af3ba87247253b8c2a172e4eac",
          ],
        },
        [
          "0x000000000000000000000000000000000000000000000000000000000001bba1",
          "0x0000000000000000000000000000000000000000000000000000000000000001",
        ],
        { from: account_one }
      );
      let balance = await this.solnSquareVerifierContract.balanceOf(
        accounts[0]
      );

      assert.equal(balance, 2, "balance is not equal to 2.");
    });
  });
});
