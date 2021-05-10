/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

// document reads top to bottom. First, log the existing value of strap length
console.log("left before:", backpack.strapLength.left);

// after current strap length is called, run the newStrapLength function to change the lengths to left = 10, right = 15
backpack.newStrapLength(10,15);

// after function has been run, log the strap length again, showing the new values placed by the function from the line above
console.log("left after:", backpack.strapLength.left);