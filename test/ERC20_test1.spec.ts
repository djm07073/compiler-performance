import { ethers } from "hardhat";
import { ERC20_TEST1 } from "../typechain-types";
describe("CASE1: BASELINE", () => {
  let erc20: ERC20_TEST1;
  it("Deploy ERC20 & Mint 100 Tokens", async () => {
    erc20 = await (await ethers.getContractFactory("ERC20_TEST1"))
      .deploy()
      .then((tx) => tx.waitForDeployment());
  });
  it("Mint 100 Tokens to owner", async () => {
    const [owner, account1] = await ethers.getSigners();
    await erc20.mint().then((tx) => tx.wait());
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
