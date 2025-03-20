function processing() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject("Failed");
    resolve(2);
  });
}

function init() {
  processing()
    .then((v) => console.log(v))
    .catch((err) => console.log(err));
}

// init();

let result = (console.log("Hello"), 2 + 2);
console.log(result); // Output: Hello, 4
