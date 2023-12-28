# BookShelf

#### BookShelf - Personal Project

##### Technology used - React | JavaScript | CSS | Axios

##### Site Demo -
https://jonathan-evey.github.io/book-shelf/

##### Project main use -

-   Users can find and save books to a digital "bookshelf".

#### Projects current main features and functions.

-   Users are able to search for books to save on their shelf. The search function uses google's book api (https://developers.google.com/books/docs/v1/using) to pull the information on the books as well as the book cover image.

-   The books shown are the 10 most relevant books based on search terms. Page view at the bottom of books found allows users to update books shown by the next 10 books pulled by API, and after page 1 can go back to the previous 10 books.

-   Books have an updatable display option once it is added to the shelf for if the book is unread, being read, or read.

Search functions -

-   Search the bookshelf for books by keywords in the title.
-   Search the bookshelf for books by author.

Sort functions -

-   Sort by title, either A to Z or Z to A.
-   Sort by author, either A to Z or Z to A (This will sort by last name).

Filter functions -

-   filter by read, reading, or unread.
-   filter by rating 0 to 5.

#### Current known issues and bugs

-   minor bug where the focus stays active on menu buttons after clicking on them.
-   minor overflow of btns for notes/review container at smaller screens

#### Current list of updates and upgrades to work on

-   full review of application accessibility

-   update notes and reviews to save the format of how they were typed.
-   add dates to when a note or review was added.
-   add a default book cover image if one is not found with Google API.
-   Remove a book from the shelf. (toggle option from the menu, and then select the book to remove).
-   Filter by genres.
-   Filter by author.
-   Owned/unowned toggle.
-   User login to save the user's bookshelf. (done )
-   User option to pick a color scheme.
-   Set Errors when the user enters the wrong password or email
-   Set up reset password functions
-   User profile pictures
-   User account settings page
-   Feedback page/form
-   Reading log page/functions
-   Add friends by email, and let them see your bookshelf
