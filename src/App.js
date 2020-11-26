import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './components/Bookcase'
import SearchBar from './components/SearchBar'

class BooksApp extends React.Component {
  state = {
    // Holds the three different shelves for our store.
    bookshelves: [
      { bookShelfID: 1, bookShelfTitle: "Currently Reading" },
      { bookShelfID: 2, bookShelfTitle: "Want to Read" },
      { bookShelfID: 3, bookShelfTitle: "Read" }
    ],
    showSearchPage: false,
    reading: [],
    read: [],
    toRead: [],
  }

  // Handler the toggling of the search screen
  showSearchPageHandler = () => this.setState(prevState => ({ showSearchPage: !prevState.showSearchPage }))

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBar onCloseSearch={this.showSearchPageHandler} /> :
          <Bookcase bookshelves={this.state.bookshelves} onAddBookHandler={this.showSearchPageHandler} />}
      </div>
    )
  }
}


export default BooksApp
