import React from 'react';
import './App.css';
import { books } from './components/books'
import Bookcase from './components/Bookcase';
import SearchBar from './components/SearchBar';
import { Link, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    books,
    currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
    wantToRead: books.filter(book => book.shelf === "wantToRead"),
    read: books.filter(book => book.shelf === "read"),
    selectValue: ""
  }


  changeShelfHandler = (e, book) => {
    const value = e.target.value
    this.setState(prevState => ({
      [value]: this.state[value] ? this.state[value].filter(value => value.id !== book.id) : prevState[value]
    }))
  }

  render() {
    const { books, read, currentlyReading, wantToRead } = this.state

    const categories = [
      { id: 1, category: "Reading", shelf: "currentlyReading", books: currentlyReading },
      { id: 2, category: "To read", shelf: "wantToRead", books: wantToRead },
      { id: 3, category: "Read", shelf: "read", books: read }
    ]

    return (
      <div className="app">
        <Route path="/search" render={() => <SearchBar />} />

        <Route
          exact
          path="/"
          render={() =>
            <Bookcase
              categories={categories}
              books={books}
              changeShelfHandler={this.changeShelfHandler}
              selectValue={this.selectValue}
            />
          }
        />

        <div className="open-search">
          <Link to="/search">Add a book </Link>
        </div>
      </div>
    )
  }
}


export default BooksApp
