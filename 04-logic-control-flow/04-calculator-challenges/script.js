// Method 1
function calculator(num1, num2, operator) {

    if (operator === '+') {
        console.log(num1 + num2);
    }
    else if (operator === '-') {
        console.log(num1 - num2);
    }
    else if (operator === '*') {
        console.log(num1 * num2);
    }
    else if (operator === '/') {
        console.log(num1 / num2);
    }
    else {
        console.log('Error in input method');
    }
}

calculator(5, 2, '&');

// Method 2:
function calculator1(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break
        case '-':
            console.log(num1 - num2);
            break
        case '*':
            console.log(num1 * num2);
            break
        case '/':
            console.log(num1 / num2);
            break
        default:
            console.log('Error in Switch Operator Input');
    }
}

calculator1(5, 2, '&');