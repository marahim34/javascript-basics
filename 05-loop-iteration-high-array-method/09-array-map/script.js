// map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubleNumbers = numbers.map(number => number * 2);
const numbersSquare = numbers.map(number => number * number);
const numbersPlus = numbers.map(number => number + number);
const numbersString = numbers.map(number => 'Number ' + number);

console.log(doubleNumbers, numbersSquare, numbersPlus, numbersString);


// with forEach
const doubleNumbers1 = [];

numbers.forEach(number => {
    doubleNumbers1.push(number * 2);
});

console.log(doubleNumbers1);

// So, map is shorter version than the forEach version

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1971, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1991, end: 2006 },
    { name: 'Company Four', category: 'Finance', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Retail', start: 1990, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1996, end: 2023 },
    { name: 'Company Seven', category: 'Technology', start: 1979, end: 2014 },
    { name: 'Company Eight', category: 'Auto', start: 1976, end: 2000 },
    { name: 'Company Nine', category: 'Retail', start: 1996, end: 2009 },
    { name: 'Company Ten', category: 'Technology', start: 1987, end: 2021 },
];

// Create an array of company names

const companyArray = companies.map(company => company.name);

console.log(companyArray);

// With forEach (For)

const companyName = [];

companies.forEach(compName => {
    companyName.push(compName.name)
});

console.log(companyName);


// Create an array with just company and category; MANIPULATING ARRAY
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
});

console.log(companyInfo);

// Create an array of the length of each company in Years
const companyYears = companies.map(companyYear => {
    return {
        name: companyYear.name,
        length: companyYear.end - companyYear.start + ' years'
    }
});


console.log(companyYears);

// Chain map method
const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);


const squareAndDouble2 = numbers
    .map(function (number) {
        return Math.sqrt(number)
    })
    .map(function (sqrt) {
        return sqrt * 2
    })
    .map(function (sqrtDoubled) {
        return sqrtDoubled * 3
    });

console.log(squareAndDouble);

// Chaining different methods
const evenDobule = numbers
    .filter(number => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenDobule);