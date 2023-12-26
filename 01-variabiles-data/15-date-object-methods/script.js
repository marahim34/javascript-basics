let x;

let d = new Date();

// To string
x = d.toString();

// time stamp in milliseconds
x = d.getTime();
x = d.valueOf();

// get specific year
x = d.getFullYear();

// get the month
x = d.getMonth();

// get the day
x = d.getDay();

// get the date
x = d.getDate();

// get the hours
x = d.getHours();

// get the minutes
x = d.getMinutes();

// get the seconds
x = d.getSeconds();

// get the milliseconds
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleDateString('default', { month: 'short' });

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
});

console.log(x);