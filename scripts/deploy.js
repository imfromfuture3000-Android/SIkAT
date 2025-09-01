require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
  const GaslessSwap = await ethers.getContractFactory("GaslessSwap");
  const swap = await GaslessSwap.deploy();
  await swap.deployed();
  console.log("⛽ GaslessSwap deployed to:", swap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
