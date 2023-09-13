const myList = [1,3,5,7,9];

const binarySearch = (list, item) => {
 let low = 0;
 let high = list.length - 1;
 while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    console.log("low", low, "high", high, "mid", Math.floor(mid), "guess", guess);
    if (guess == item) {
        console.log('guess === item', guess, item, "miesjce: ", mid);
        return;
    } else if (guess > item) {
        console.log("guess > item", guess, item);
        high = mid + 1;
    } else {
        console.log("guess < item", guess, item);
        low = mid + 1;
    }
 }
}

console.log("?lista: ", myList);
binarySearch(myList, 7);

// khanacademy