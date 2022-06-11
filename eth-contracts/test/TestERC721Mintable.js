var UdacityERC721Token = artifacts.require("UdacityERC721Token");

contract("TestERC721Mintable", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await UdacityERC721Token.new({ from: account_one });

      // TODO: mint multiple tokens
      for (let i = 0; i < 10; i++) {
        let status = await this.contract.mint(accounts[i], i, {
          from: account_one,
        });
      }
    });

    it("should return total supply", async function () {
      let totalSupply = await this.contract.totalSupply.call({
        from: account_one,
      });
      assert.equal(totalSupply, 10, "total supply is not 10.");
    });

    it("should get token balance", async function () {
      let balance = await this.contract.balanceOf(accounts[0]);
      assert.equal(balance, 1, "balance is not equal to 1.");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      let tokenURI = await this.contract.tokenURI(1);
      assert.equal(
        tokenURI,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1",
        "URI returned is incomplete."
      );
    });

    it("should transfer token from one owner to another", async function () {
      // transfer token 0 from accounts[0] to accounts[1]
      await this.contract.transferFrom(accounts[0], accounts[1], 0, {
        from: account_one,
      });
      let newOwner = await this.contract.ownerOf(0);
      assert.equal(newOwner, accounts[1], "New owner is not accounts[1");
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await UdacityERC721Token.new({ from: account_one });
    });

    it("should fail when minting when address is not contract owner", async function () {
      let reverted = false;
      try {
        let status = await this.contract.mint(accounts[5], 12345, {
          from: account_two,
        });
      } catch (e) {
        reverted = true;
      }
      assert.equal(
        reverted,
        true,
        "Minting should fail when address is not contract owner"
      );
    });

    it("should return contract owner", async function () {
      let ownerAddr = await this.contract.owner();
      assert.equal(
        ownerAddr,
        account_one,
        "Owner address not returned or mismatched."
      );
    });
  });
});
