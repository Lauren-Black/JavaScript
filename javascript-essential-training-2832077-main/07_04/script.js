/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const collection = ["water bottle", "phone", "monitor", "earrings", "scissors","mouse", "octopus"];

console.log("first array: ", collection);

collection.unshift(collection.pop());

console.log("new array: ", collection);

collection.sort();

console.log("sorted array: ", collection);

const findItem = collection.find((item)=> item === "phone");

console.log("found item: ", findItem);
