import { ethers } from "hardhat";
import { ERC20_TEST13 } from "../typechain-types";
describe("CASE13: OrderLiterals Off", () => {
  let erc20: ERC20_TEST13;
  it("Deploy ERC20 & Mint 100 Tokens", async () => {
    erc20 = await (await ethers.getContractFactory("ERC20_TEST13"))
      .deploy()
      .then((tx) => tx.waitForDeployment());
  });
  it("Mint 100 Tokens to owner", async () => {
    const [owner, account1] = await ethers.getSigners();
    await erc20.mint();
  });
  it("Transfer 50 Tokens to Account 1", async () => {
    const [owner, account1] = await ethers.getSigners();
    await erc20.transfer(account1.address, ethers.parseEther("50"));
  });

  it("Approve 30 Tokens to Account 1", async () => {
    const [owner, account1] = await ethers.getSigners();
    await erc20.approve(account1.address, ethers.parseEther("30"));
  });

  it("Transfer From 30 Tokens to Account 1", async () => {
    const [owner, account1] = await ethers.getSigners();
    await erc20
      .connect(account1)
      .transferFrom(owner, account1.address, ethers.parseEther("30"));
  });
});
