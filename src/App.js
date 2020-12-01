import React from 'react';
import { books } from './components/books';
import './App.css';
import Bookcase from './components/Bookcase';
import SearchBar from './components/SearchBar';
import { Link, Route } from "react-router-dom";

// title, shelf, imageLinks, id, authors
import { getAll } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    reading: [],
    read: [],
    toRead: [],
  }

  async componentDidMount() {
    const res = await getAll()
    const data = await res
    for await (const book of data) {
      const b = {
        id: book.id,
        title: book.title,
        authors: book.authors,
        cover: book.imageLinks,
        shelf: book.shelf,
      }
      console.log(b.shelf);
      this.setState(prevState => ({ books: prevState.books.concat([b]) }))
    }
  }

  render() {
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
            categories={[
              { id: Math.random(), category: "Reading", shelf: "currentlyReading" },
              { id: Math.random(), category: "To read", shelf: "wantToRead" },
              { id: Math.random(), category: "Read", shelf: "read" }
            ]}
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
