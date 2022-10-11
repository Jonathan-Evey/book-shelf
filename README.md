# BookShelf

#### BookShelf - Personal Project

##### Technology used - React | JavaScript | CSS | Axios

##### Project main use - 

- User can find and save books to a digital "bookshelf". 


#### Projects current main features and functionss.

-  Users are able to search for books to save on their shelf. The search function uses google's book api (https://developers.google.com/books/docs/v1/using) to pull the infromation on the books as well as the book cover image.

-  Books shown are the 10 most relevent books based on search terms. Page view at the bottom of books found allow user to update books show by next 10 books pulled by API, and after page 1 can go back to the previous 10 book.

- Books have a updatable display option once it is added to the shelf for if the book is unread, being read, or read.

Search functions -

- Search bookshelf for book by key words in the title.
- Search bookshelf for book by author.

Sort functions -

- Sort by title, either A to Z or Z to A.
- Sort by author, either A to Z or Z to A (This will sort by last name).

Filter functions -

- filter by read, reading or unread.
- filter by rating 0 to 5.

#### Current known issues and bugs

- minor bug where focuse stays active on menu buttons after clicking on them.
- visual differences between FireFox and Chrome.
    

#### Current list of updates to work on

- major CCS code refactoring.
- add a default book cover image if one is not found with googles API. 


#### Upgrades to add to application

- Remove a book from shelf. (toggle option from menu, and then select the book to remove).
- Filter by genres.
- Filter by author.
- Owned/unowned toggle.
- User login to save the users bookshelf.
- User option to pick a color scheme.

Site Demo -

https://nighistheend.github.io/book-shelf/
