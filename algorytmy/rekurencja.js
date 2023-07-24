const recursionFunction = (i) => {
    console.log(`rekurencja: ${i}`);
    if (i <= 0) {
        console.log('przypadek podstawowy');
        return;
    } else {
        console.log('przypadek rekurencyjny');
        recursionFunction(i -1);
    }
}

recursionFunction(4);

const number = 3;

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

console.log(`${number} silnia to ${factorial(number)}`);