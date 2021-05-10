/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Book {
    constructor(
      // Defines parameters:
      title,
      author,
      numberOfPages,
      coverColor,
      numberOfChapters,
      pagesRead,
      chaptersRead,
      bookFinished
    ) {
      // Define properties:
      this.title = title;
      this.author = author;
      this.numberOfPages = numberOfPages;
      this.coverColor = coverColor;
      this.numberOfChapters = numberOfChapters;
      this.progress = {
        pages: pagesRead,
        chapters: chaptersRead,
      };
      this.bookFinished = bookFinished;
      this.checkComplete = function () {
        if (this.progress.pages === numberOfPages || this.progress.chapters === numberOfChapters){
            this.bookFinished = true;
        }
    }
    }
    
    // Add methods like normal functions:
    toggleRead(finishedStatus) {
      this.bookFinished = finishedStatus;
    }
    updateProgress(pagesProgress, chaptersProgress) {
      this.progress.pages = pagesProgress;
      this.progress.chapters = chaptersProgress;
    }
  }

  
  
  export default Book;  