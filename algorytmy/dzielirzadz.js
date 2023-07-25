const arrayToSum = [3,5,12,0,25, -3, 8];

const sumFunction = (arr) => {
    let total = 0;
    for (const i in arr) {
        total += arr[i];
    }
    return total;
}

console.log(sumFunction(arrayToSum));

const recursionSumFunction = (arr) => {
    if (arr.length <= 0) {
        return 0;
    } else {
        let total = arr[0];
        arr.shift();
        return total + recursionSumFunction(arr);
    }
}

console.log(recursionSumFunction(arrayToSum));