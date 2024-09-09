// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// We can also pass different values to date object like

let myCreateedDate = new Date(2024, 3, 24)
// console.log(myCreateedDate.toLocaleString());

let myTimeStamp = new Date()
console.log(myTimeStamp.getTime());   // Returns value in milliseconds

console.log(Math.floor(Date.now()/1000));   // To convert milliseconds into seconds








