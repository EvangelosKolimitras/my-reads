import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Bookcase from "./components/Bookcase";
import * as API from './BooksAPI'
import { Link, Route } from "react-router-dom";
import { map, filter, log, ifElse, booksWithCategory } from "./utils/fns";

class BooksApp extends React.Component {
  state = {
    books: [],
    bookcase: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    selectValue: ""
  };


  // State initialisation
  componentDidMount = async () => {

    let books, currentlyReading, wantToRead, read;


    // Fetch all books from the API
    books = await API.getAll();

    currentlyReading = filter(books);
    wantToRead = filter(books);
    read = filter(books);


    /*
      Filter the this.state.books array which is being populated onComponentDidMount
      with data fetched from the API.

      This will create a new shelf and store the books with the property {shelf:"currentlyReading"}
    */
    currentlyReading(booksWithCategory("currentlyReading"))


    /*
      Filter the this.state.books array which is being populated onComponentDidMount
      with data fetched from the API.

      This will create a new shelf and store the books with the property {shelf:"wantToRead"}
    */
    wantToRead(booksWithCategory("wantToRead"))

    /*
      Filter the this.state.books array which is being populated onComponentDidMount
      with data fetched from the API.

      This will create a new shelf and store the books with the property {shelf:"read"}
    */
    read(booksWithCategory("read"))

    this.setState(
      prevState => {
        // Check if localStorage exists
        return ifElse(localStorage.getItem("local-state"))
          (
            () => JSON.parse(localStorage.getItem("local-state")),
            () => ({ books, bookcase: { currentlyReading, wantToRead, read } })
          )
      })
  }

  updateLocaleStorage = () => localStorage.setItem("local-state", JSON.stringify(this.state))

  changeShelfHandler = (e, book) => {

    let shelfOfClickedBook, shelfOfTheCurrentBook;

    /* 
      If the book's shelf property is not one of the categories, then
      we set it to what the user chooses it to be
    */
    shelfOfClickedBook = e.target.value;


    /*
       This book variable is a copy of the state, which the state is being populated onComponentDidMount
        with data coming from the server.  --> API.getALL() see componentDidMount()
    */
    // const books = [...this.state.books]


    /* 
      This is the shelf which holds all the books that have the same shelf as the current book
      eg. If the current book's shelf property is "wantToRead" then we are on the shelf "wantToRead"
    */
    shelfOfTheCurrentBook = [...this.state.bookcase[book.shelf]];


    // Hanldes the case where the option is "none"
    this.setState((prevState) => {
      if (shelfOfClickedBook === "none") {
        return {
          books: filter(prevState.books)(b => b.id !== book.id),
          bookcase: {
            ...prevState.bookcase,
            [book.shelf]: filter(shelfOfTheCurrentBook)((b) => b.id !== book.id),
          },
          selectValue: ""
        };
      };

      return {

        books: map(prevState.books)((b) =>
          b.id === book.id ? { ...b, shelf: shelfOfClickedBook } : b)
        ,
        bookcase: {
          ...prevState.bookcase,
          [book.shelf]: filter(shelfOfTheCurrentBook)((b) => b.id !== book.id),
          [shelfOfClickedBook]: [...prevState.bookcase[shelfOfClickedBook], { ...book, shelf: shelfOfClickedBook }]
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
        category: "currentlyReading",
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
        <Route path="/search" render={() =>
          <SearchBar
            books={this.state.books}
            changeShelfHandler={this.changeShelfHandler}
          />} />

        <Route
          exact
          path="/"
          render={() => (
            <>
              <Bookcase
                categories={categories}
                changeShelfHandler={this.changeShelfHandler}
                selectValue={this.state.selectValue}
              />
              <div className="open-search">
                <Link to="/search">Add a book </Link>
              </div></>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

