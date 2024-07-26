import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    zircuit: {
      url: 'https://zircuit1.p2pify.com',
      accounts: [PRIVATE_KEY]
    }
  }
};

export default config;
