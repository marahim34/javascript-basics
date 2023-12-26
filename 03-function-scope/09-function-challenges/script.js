// Challenge # 1
const getCelsius = (f) => `The temperature is ${((f - 32) * 5 / 9).toFixed(2)} degree celsius`;

console.log(getCelsius(200));

// Challenge 2

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`Min is ${min} and Max is ${max}`);

    return {
        min, max
    }
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7]));

// Challenge 3
(function (length, width) {

    console.log(length * width);

})(100, 80); 
