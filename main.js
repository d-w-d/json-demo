// Load the json file into JS as a JS object
const demo = require("./demo.json");

// Extract a nested value using dot notation
const key4b2_1 = demo.key4.key4b[0].key4b1_1;

// Alternatively, extract values using bracket notation
const key2 = demo["key2"];

// If you want to print a JS object to screen, or ship it across a network,
// you need to turn it into a JSON-string with the built in JSON facility:
const output = JSON.stringify(demo.key5);

// Print stuff to terminal
console.log("Here is a nested value: ", key4b2_1);
console.log("And here is another: ", key2);
console.log("And here is another JSON object: ", output);