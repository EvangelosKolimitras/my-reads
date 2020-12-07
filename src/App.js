import React from "react";
import "./App.css";
import { books } from "./components/books";
import SearchBar from "./components/SearchBar";
import Bookcase from "./components/Bookcase";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books,
    bookcase: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    selectValue: ""
  };

  componentDidMount() {
    // State initialisation
    this.setState(
      (prevState) =>
        // Check if localStorage exists
        localStorage.getItem("local-state") ?
          JSON.parse(localStorage.getItem("local-state")) :
          // if !localStorage then use the currentState
          ({
            books,
            bookcase: {
              currentlyReading: books.filter(
                (book) => book.shelf === "currentlyReading"
              ),
              wantToRead: books.filter((book) => book.shelf === "wantToRead"),
              read: books.filter((book) => book.shelf === "read")
            }
          })
    )
  }

  updateLocaleStorage = () => localStorage.setItem("local-state", JSON.stringify(this.state))


  changeShelfHandler = (e, book) => {
    const value = e.target.value;
    // if the book's shelf property is not one of the categories, then
    // we set it to what the user chooses it to be
    if (book["shelf"] !== value) { book["shelf"] = value }
    const books = [...this.state.bookcase[book.shelf]];
    const filteredBooks = books.filter((b) => b.id !== book.id);

    this.setState((prevState) => {
      if (value === "none") return;

      return {
        books: prevState.books.map((b) =>
          b.id === book.id ? { ...b, shelf: value } : b
        ),
        bookcase: {
          ...prevState.bookcase,
          [book.shelf]: filteredBooks,
          [value]: [...prevState.bookcase[value], { ...book, shelf: value }]
        },
        selectValue: ""
      };
    }, () => this.updateLocaleStorage());

  };


  render() {
    // Destructure the state
    const {
      bookcase: { currentlyReading, wantToRead, read }
    } = this.state;

    const categories = [
      {
        id: Math.random() * 19,
        category: "Reading",
        shelf: "currentlyReading",
        books: currentlyReading
      },
      {
        id: Math.random() * 19,
        category: "To read",
        shelf: "wantToRead",
        books: wantToRead
      },
      { id: Math.random() * 19, category: "Read", shelf: "read", books: read }
    ];

    return (
      <div className="app">
        <Route path="/search" render={() => <SearchBar
          changeShelfHandler={this.changeShelfHandler}
        />} />

        <Route
          exact
          path="/"
          render={() => (
            <Bookcase
              categories={categories}
              changeShelfHandler={this.changeShelfHandler}
              selectValue={this.state.selectValue}
            />
          )}
        />

        <div className="open-search">
          <Link to="/search">Add a book </Link>
        </div>
      </div>
    );
  }
}

export default BooksApp;

