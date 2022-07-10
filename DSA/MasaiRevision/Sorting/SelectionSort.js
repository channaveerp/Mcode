let arr = [10, 15, 8, 3, 7, 20, 1, 12];

console.log(SelectionSort(arr));

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
