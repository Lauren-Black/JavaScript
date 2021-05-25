/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "camera";
collection[collection.length] = "new item";
collection[9] = "at the end";
collection[7] = 17;

console.log(collection);
