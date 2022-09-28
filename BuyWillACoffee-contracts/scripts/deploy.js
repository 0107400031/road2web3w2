// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyWillACoffee = await hre.ethers.getContractFactory("BuyWillACoffee");
  const buyWillACoffee = await BuyWillACoffee.deploy();

  await buyWillACoffee.deployed();

  console.log("BuyWillACoffee deployed to:", buyWillACoffee.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
