/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
//Map would not typically be used like this. Map is used when you need to loop through a manipulate data to create a new array.
//If you just want to loop through and display data, use forEach.
const stuffItmes = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

stuffItmes.forEach((item) => {
  stuffList.append(item);
})

console.log("stuff:", stuff);
console.log("stuffItems", stuffItmes);
article.append(stuffList)