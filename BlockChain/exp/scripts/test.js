const { ethers } = require("ethers");
const { Wallet, providers } = require("ethers");
const fs = require("fs");

// Function to generate a random private key
function generateRandomPrivateKey() {
  return ethers.utils.hexlify(ethers.utils.randomBytes(32));
}

// function checkPrivateKeyBalance(privateKey) {
//   try {
//     const wallet = new ethers.Wallet(privateKey);
//     return wallet.address; // If valid, return the address
//   } catch (error) {
//     return null; // If invalid, return null
//   }
// }
async function checkPrivateKeyBalance(privateKey) {
  try {
    const wallet = new ethers.Wallet(privateKey);
    const provider = new ethers.providers.InfuraProvider(
      "mainnet",
      "0d48b35e22a0494d93e130aa133e9735"
    ); // Connect to a provider

    // Attach provider to wallet
    const connectedWallet = wallet.connect(provider);

    // Get balance
    const balance = await connectedWallet.getBalance();

    console.log(
      `Wallet:- ${wallet.address}, balance:- ${ethers.utils.formatEther(
        balance
      )}`
    );
    // If balance is greater than 0, return the address; otherwise return null
    if (balance.gt(0)) {
      return wallet.address;
    } else {
      return null; // No balance, return null
    }
  } catch (error) {
    return null; // If invalid private key or any error, return null
  }
}

// Main function to generate keys and check their balance
async function generateAndCheckPrivateKeys() {
  const validKeys = [];
  const numKeysToGenerate = 1000;

  for (let i = 0; i < numKeysToGenerate; i++) {
    const privateKey = generateRandomPrivateKey();
    // const privateKey =
    //   "0b8c198087036ac5aed4360977b9a39bbef2b01dfa9e8f328c2b0feb4057c2a8";

    if (await checkPrivateKeyBalance(privateKey)) {
      const wallet = new ethers.Wallet(privateKey);
      console.log(
        `Valid private key found: ${privateKey} => Address: ${wallet.address}`
      );
      validKeys.push(`${privateKey} => ${wallet.address}`);
    }
  }

  // Save valid private keys and addresses to a file
  if (validKeys.length > 0) {
    fs.writeFileSync("valid_private_keys.txt", validKeys.join("\n"));
    console.log(
      `Saved ${validKeys.length} valid private keys and addresses to 'valid_private_keys.txt'.`
    );
  } else {
    console.log("No valid private keys with balance found.");
  }
}

// Run the script
// generateAndCheckPrivateKeys().catch(console.error);

module.exports = { generateAndCheckPrivateKeys };
