const library = [
    {
        title: 'Ekushe Podok',
        author: 'Miguel Huntington',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Baishe Srabon',
        author: 'Oskar Mukherjee',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Stephen: I will catch you',
        author: 'Robert Jukka',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

// Step 2 (using dot notation)
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3 destructuring
const { title: firstBook } = library[0];

// Step 4
const libraryJSON = JSON.stringify(library);


console.log(libraryJSON);