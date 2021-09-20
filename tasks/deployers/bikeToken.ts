import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { BikeToken, BikeToken__factory } from "../../typechain";

task("deploy:BikeToken")
  .addParam("bikeToken", "10000")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const bikeTokenFactory: BikeToken__factory = await ethers.getContractFactory("BikeToken");
    const bikeToken: BikeToken = <BikeToken>await bikeTokenFactory.deploy(taskArguments.bikeToken);
    await bikeToken.deployed();
    console.log("Greeter deployed to: ", bikeToken.address);
  });
