import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css'

import Bookcase from './components/Bookcase'
import SearchBar from './components/SearchBar'

const BooksApp = props => {

  const [books, setBooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)
  const [shelves, setShelves] = useState([])

  useEffect(() => fetchMyBooks(), [])

  const fetchMyBooks = async () => {
    const books = await BooksAPI.getAll();
    setBooks(books)
    setIsLoaded(false)
    setShelves(books.map(book => ({ id: book.id, shelf: book.shelf })))
  }

  const updateShelf = (id, shelf) => BooksAPI.update({ id }, shelf).then(() => fetchMyBooks())

  const search = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((searchBooks) => {
        setSearchBooks(searchBooks)
      })
    } else {
      setSearchBooks([])
    }
  }

  return (
    <div className="app">
      <Route exact path='/search' render={() => (
        <SearchBar
          shelf={shelves}
          books={searchBooks}
          onSearch={search}
          onUpdateShelf={updateShelf} />
      )} />

      <Route exact path='/' render={() => (
        <Bookcase
          books={books}
          isLoaded={isLoaded}
          onUpdateShelf={updateShelf} />
      )} />
    </div>
  )
}

export default BooksApp