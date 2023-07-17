console.log('szybkie sortowanie | quicksort');

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
            console.log('sprawdzone: ', arr[i]);
        }
        return smallest_index;
    }
}

const selectionSort = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++ ) {
        let foundSmallest = findSmallest(arr);
        console.log('znalezione: ', foundSmallest, arr[foundSmallest]);
        newArr.push(arr.slice(foundSmallest));
    }
    return newArr;
}

let arrayToSort = [5,3,6,2,10];

console.log(arrayToSort, 'selectionSort: ', selectionSort(arrayToSort), arrayToSort.sort());
// WIP