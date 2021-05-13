/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

 import Book from "./Book.js";

 const book1 = new Book (
    "Lord of the Rings",
    "J.R.R Tolkien",
    531,
    "black",
    12,
    142,
    5,
    false,
 );

 const book2 = new Book (
    "The House in the Cerulean Sea",
    "TJ Klune",
    396,
    "blue",
    19,
    396,
    19,
 );

 console.log("The book1 object:", book1);
 console.log("The book2 object:", book2);

 console.log("Book1 pages read:", book1.progress.pages);
 console.log("Book1 chapters read:", book1.progress.chapters);
 console.log("Book1 completion status:", book1.bookFinished);

 book1.updateProgress(531,12);
 book1.checkComplete();

 console.log("Book1 updated completion status:", book1.bookFinished);

 console.log("Book2 completion status:", book2.checkComplete(), book2.bookFinished);

