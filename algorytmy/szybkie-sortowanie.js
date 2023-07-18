console.log("szybkie sortowanie | quicksort");

// based at code from book algotrithms an python
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
    return smallest_index;
  }
};

const selectionSort = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let foundSmallest = findSmallest(arr);
    newArr.push(arr[foundSmallest]);
  }
  return newArr;
};

// solution from StackOverflow
const quickSortFromStackOverflow = (array) =>
  (function qsort(arr, start, end) {
    if (start >= end) return arr;
    let swapPos = start;

    for (let i = start; i <= end; i++) {
      if (arr[i] <= arr[end]) {
        [arr[swapPos], arr[i]] = [arr[i], arr[swapPos]];
        swapPos++;
      }
    }
    qsort(arr, start, --swapPos - 1);
    qsort(arr, swapPos + 1, end);

    return arr;
  })(Array.from(array), 0, array.length - 1);

let arrayToSortWithShortNumbers = [5, 3, 6, 2, 1];
let arrayToSortWithLongerNumbers = [53, 32, 6, 27, 1];

let arraySortNumerically = arrayToSortWithLongerNumbers.sort((a, b) => a - b);

console.log(
  arrayToSortWithShortNumbers,
  "selectionSort na liczbach: ",
  selectionSort(arrayToSortWithShortNumbers),
  arrayToSortWithShortNumbers.sort()
);
console.log(
  arrayToSortWithLongerNumbers,
  "selectionSort na cyfrach: ",
  selectionSort(arrayToSortWithLongerNumbers),
  arraySortNumerically
);
console.log(
  "array sort numerically [3,8,-10,23,19,-4,-14,27]",
  [3, 8, -10, 23, 19, -4, -14, 27].sort((a, b) => a - b)
);
console.log(
  "StackOverflow: ",
  quickSortFromStackOverflow(arrayToSortWithShortNumbers),
  quickSortFromStackOverflow(arrayToSortWithLongerNumbers)
);
