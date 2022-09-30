# BookShelf

A project where a user can find and save books to a digital "bookshelf". The books have a updatable option for if the book is unread, being read, or read. (With an owned/unowned toggle - this is not built out currently).

This project is build using React, CSS and google's book API.

Users are able to search for new books by Title or by Author and seclect a found book to add to their shelf. The search function uses google's book api (https://developers.google.com/books/docs/v1/using) to pull the infromation on the books as well as the book cover image.

    * searching by title will show the 10 most relevent books based on search terms

    * searching by author will show the 10 most relevent books based on search terms. (future update to support page views to see view 10 at a time, with page buttons to move go to the next ten or the previous ten).

Functions for the user to filter or search their shelf.

    Search functions:
        * Search bookshelf for book by key words in the title.
        * Search bookshelf for book by author.

    Sort functions:
        * Sort by title, either A to Z or Z to A.
        * Sort by author, either A to Z or Z to A (This will sort by last name).

    Filter functions:
        * filter by read, reading or unread.
        * filter by rating 0 to 5 with half points.
        * read next (this is not built out currently)
        * genres (this is not built out currently)
        * author (this is not built out currently)

Current know issues: 
        * drop down menus will not close when user clicks elsewhere on the page. 
        * some of the drop down lists are not built out corretly for accessibility standerds. (Currently, they are just list elements, and do not have a link or button element inside of each list element). 
        * not able to update or add ratings.
    

Current list of updates to work on:
        * major CCS code refactoring.
        * finish the styling on the book cards when you search for a new book.
        * code the rating functions to add and update ratings on books.
        * drop down menu updates, add in links/buttons for accessibility, and update that closes menues when clicking elsewhere.

Upgrades to application:
        * user note/review section for each book, that they can add/edit/read.
        * user login to save the users bookshelf.
        * user option to pick a color scheme.
