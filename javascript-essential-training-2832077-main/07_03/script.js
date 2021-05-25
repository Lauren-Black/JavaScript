/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// backpackContents.forEach(function (item) {
//     item = `<li>${item}</li>`;
//     console.log(item);
//   });

// The function below is searching for the first item in the array that meets the criteria of the number of characters being
// greater than or equal to 5 (ie. the string "Piggy" would qualify, but the string "love" would not). The method looks through
// the array and the first item it finds that matches this criteria is returned in the console.

let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
      return item;
    }
  });
  console.log("longItems:", longItems);

console.log(backpackContents);




