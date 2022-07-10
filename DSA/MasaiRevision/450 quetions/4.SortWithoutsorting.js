//https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

let arr = [0, 2, 1, 2, 0];

function sortWithoutSorting(arr) {
  let obj = {};
  for (key of arr) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }
  //console.log(obj);

  let keys = Object.keys(obj);
  let value = Object.values(obj);

  let str = "";
  for (let i = 0; i < keys.length; i++) {
    str += keys[i].repeat(value[i]);
  }
  console.log(str.split("").join(" "));
}

//sortWithoutSorting(arr)

function sortWithoutSorting1(arr) {
  let str1 = "";
  let str2 = "";
  let str3 = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      str1 += arr[i] + " ";
    }
    if (arr[i] == 1) {
      str2 += arr[i] + " ";
    }
    if (arr[i] == 2) {
      str3 += arr[i] + " ";
    }
  }

  return str1 + str2 + str3;
}

console.log(sortWithoutSorting1(arr));
