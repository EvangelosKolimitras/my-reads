import React from 'react';
import './App.css';
import Bookcase from './components/Bookcase';
import SearchBar from './components/SearchBar';
import { Link, Route } from "react-router-dom";
import { getAll } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    reading: [],
    wantToRead: [],
    read: []
  }

  async componentDidMount() {

    const res = await getAll()
    const data = await res
    let state = []
    for await (const book of data) {
      const bookObj = {
        id: book.id,
        title: book.title,
        authors: book.authors,
        cover: book.imageLinks.thumbnail,
        shelf: book.shelf,
      }
      state.push(bookObj)
    }

    this.setState(prevState => ({
      books: [...prevState.books, ...state],
      reading: [...prevState.reading, ...state.filter(book => book.shelf === "currentlyReading")],
      wantToRead: [...prevState.wantToRead, ...state.filter(book => book.shelf === "wantToRead")],
      read: [...prevState.read, ...state.filter(book => book.shelf === "read")],
    }))
  }

  render() {

    const categories = [
      { id: 1, category: "Reading", shelf: "currentlyReading", books: this.state.reading },
      { id: 2, category: "To read", shelf: "wantToRead", books: this.state.wantToRead },
      { id: 3, category: "Read", shelf: "read", books: this.state.read }
    ]

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <SearchBar />}
        />

        <Route
          exact
          path="/"
          render={() => <Bookcase
            categories={categories}
            books={this.state.books}
          />}
        />

        <div className="open-search">
          <Link to="/search">Add a book </Link>
        </div>
      </div>
    )
  }
}


export default BooksApp
