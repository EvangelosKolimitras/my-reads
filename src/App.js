import React from 'react';
// import * as BooksAPI from './BooksAPI';
import { books } from './components/books';
import './App.css';
import Bookcase from './components/Bookcase';
import SearchBar from './components/SearchBar';
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    // Holds the three different shelves for our store.
    bookshelves: [
      { bookShelfID: 1, bookShelfTitle: "Currently Reading" },
      { bookShelfID: 2, bookShelfTitle: "Want to Read" },
      { bookShelfID: 3, bookShelfTitle: "Read" }
    ],
    books,
    reading: [],
    read: [],
    toRead: [],
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <SearchBar
            onCloseSearch={this.showSearchPageHandler} />}
        />
        <Route
          exact
          path="/"
          render={() => <Bookcase
            books={this.state.books}
            bookshelves={this.state.bookshelves}
            onAddBookHandler={this.showSearchPageHandler} />}
        />

        <div className="open-search">
          <Link to="/search">Add a book </Link>
        </div>
      </div>
    )
  }
}


export default BooksApp
