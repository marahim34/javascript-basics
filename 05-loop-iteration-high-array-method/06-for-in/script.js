const colorObj = {
    color1: 'red',
    color2: 'black',
    color3: 'orange',
    color5: 'green',
    color6: 'white',
};

// Very similar to For Of Loop

for (const key in colorObj) {
    console.log(key, colorObj[key]);
};


const colorArr = ['red', 'black', 'orange', 'yellow', 'green', 'white'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}