import React from "react";
import "./App.css";
import { books } from "./components/books";
import SearchBar from "./components/SearchBar";
import Bookcase from "./components/Bookcase";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    bookcase: {
      books,
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    selectValue: ""
  };




  componentDidMount() {
    // State initialisation

    this.setState((prevState) => JSON.parse(localStorage.getItem("local-state")));
  }


  changeShelfHandler = (e, book) => {
    const value = e.target.value;
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
    });

  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("local-state", JSON.stringify(nextState))
  }


  render() {
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
