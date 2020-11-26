import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './components/ListOfBooks'
import SearchBar from './components/SearchBar'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  // Handler the toggling of the search screen
  showSearchPageHandler = () => this.setState(prevState => ({ showSearchPage: !prevState.showSearchPage }))

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBar onCloseSearch={this.showSearchPageHandler} /> :
          <ListOfBooks onAddBookHandler={this.showSearchPageHandler} />}
      </div>
    )
  }
}


export default BooksApp
