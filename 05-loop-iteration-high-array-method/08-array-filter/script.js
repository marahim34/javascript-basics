const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);

// Shorter way
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

// Same it forEach
// let evenNumbers = [];

// numbers.forEach(number => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number)
//     }
// })

// console.log(evenNumbers);

// It is more complicated with the last one, with the forEach.

// So, it is recommended to use the filter with the shorter version


// More complicated exmaple

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1971, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1991, end: 2006 },
    { name: 'Company Four', category: 'Finance', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Retail', start: 1990, end: 2014 },
    // { name: 'Company Six', category: 'Finance', start: 1996, end: 2023 },
    { name: 'Company Seven', category: 'Technology', start: 1979, end: 2014 },
    { name: 'Company Eight', category: 'Auto', start: 1976, end: 2000 },
    { name: 'Company Nine', category: 'Retail', start: 1996, end: 2009 },
    { name: 'Company Ten', category: 'Technology', start: 1987, end: 2021 },
];



// Get only retail companies

const retailCompanies = companies.filter(retailCompany => retailCompany.category === 'Retail')

console.log(retailCompanies);