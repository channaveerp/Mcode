console.log("one");

// async function two() {
//   await setTimeout(() => {
//     console.log("two");
//   }, 3000);
// }

// two();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2");
    }, 2000);
  });
}

// async function asyncCall() {
//   console.log("1");
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   console.log("3");
//   // expected output: 'resolved'
// }

// asyncCall();

function asyncCall() {
  console.log("1");
  resolveAfter2Seconds()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // .finally(() => {
  console.log("3");
  // });
}

asyncCall();
