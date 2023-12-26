const post = {
    title: 'Post one',
    body: 'This is the Body'
};


// convert to JSON string

const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post one',
        body: 'This is the Body'
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the Body'
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);