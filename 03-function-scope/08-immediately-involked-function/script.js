// const user = 'John';

(function () {
    const user = 'John';
    console.log(user);

    const hello = () => console.log('Hello from IIEF');
    hello();
})();


(function (name) {
    console.log('Hello ' + name);

})('Moga');


(function hello() {
    console.log('Hello');

    // hello()
})()