let d;

d = new Date();

d = d.toString();

d = new Date(2021, 11, 12, 11, 34, 55);

d = new Date('2021-12-13T12:30:00');
d = new Date('12/12/2023 12:30:00');
d = new Date('2023-12-13 12:30:00');


// Time Stamp
d = Date.now();

d = new Date('12-13-2023 12:30:00');
d = d.getTime();
d = d.valueOf();


// how to convert time stamp
d = new Date(1702463400000);
// The above time stamp is on miliseconds


// If we want to convert them into seconds
d = Math.floor(Date.now() / 1000);


console.log(d, typeof d);


