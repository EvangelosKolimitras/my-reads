![alt text](https://static.vecteezy.com/system/resources/thumbnails/000/076/851/small_2x/open-book-logo.jpg)

# The Librarian Project [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A digital bookcase for putting your books in order.

### Powered by

[![N|Solid](https://icons-for-free.com/iconfiles/png/128/react+original+wordmark-1324760564365629036.png)](https://reactjs.org/)
[![N|Solid](https://cdn.iconscout.com/icon/free/png-128/nodejs-6-569582.png)](https://nodejs.org/en/)

## Installation

- Run `npm install to install` the dependencies
- Run `npm start to start` the server

**Official Website:** [www.the-librarian.org](https://compassionate-liskov-2fa3f0.netlify.app/)

## Functional Programming

Some utility custom functional functions are preavailable in the `./utils` for those who want to work with FP paradigm. You are welcome to use any external libraries as well.

### Exposed custom functions

`booksWithCategory` `filter` `map` `log` `ifElse` `isArray`

Usage:

```javascript
const arr = [
  { id: 1, book: "The lord of the rings 1", pageCount: 401 },
  { id: 2, book: "The lord of the rings 2", pageCount: 536 },
  { id: 3, book: "The lord of the rings 3", pageCount: 315 },
];

filter(arr, (book) => book.pageCount > 500);

// { id: 1, book: "The lord of the rings 2", pageCount: 536 }
```

## License & copyright &copy;

Licensed under the [MIT License](LICENSE).
