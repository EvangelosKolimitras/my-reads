import React from 'react';
import './App.css';
import { books } from './components/books'
import SearchBar from './components/SearchBar';
import Bookcase from './components/Bookcase'
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {

  state = {
    bookcase: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
    selectValue: ""
  }

  componentDidMount() {
    // State initialisation
    this.setState(prevState => {
      return {
        bookcase: {
          currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
          wantToRead: books.filter(book => book.shelf === "wantToRead"),
          read: books.filter(book => book.shelf === "read"),
        }
      }
    })
  }

  changeShelfHandler = (e, book) => {
    const value = e.target.value
    const books = [...this.state.bookcase[book.shelf]];
    console.log(books);

    this.setState(prevState => {
      if (value === "none") return

      return {
        bookcase: {
          ...prevState.bookcase,
          [value]: [...prevState.bookcase[value], book]
        },
        selectValue: ""
      }
    })
  }

  render() {
    const {
      bookcase: { currentlyReading, wantToRead, read }
    } = this.state

    const categories = [
      { id: Math.random() * 19, category: "Reading", shelf: "currentlyReading", books: currentlyReading },
      { id: Math.random() * 19, category: "To read", shelf: "wantToRead", books: wantToRead },
      { id: Math.random() * 19, category: "Read", shelf: "read", books: read }
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
              changeShelfHandler={this.changeShelfHandler}
              selectValue={this.state.selectValue}
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
