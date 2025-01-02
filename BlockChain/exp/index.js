const { generateAndCheckPrivateKeys } = require("./scripts/test");

function main() {
  generateAndCheckPrivateKeys().catch(console.error);
  setTimeout(() => {
    console.log("Exiting script after 1 minute...");
    process.exit(0);
  }, 60000);
}

main();
