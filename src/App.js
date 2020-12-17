import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Topbar from './components/Topbar'
import Bookcase from './components/Bookcase'
import SearchBar from './components/SearchBar'
import { Container } from 'react-bootstrap'

import Context from './components/Context'

const BooksApp = props => {

  const [books, setBooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)
  const [shelves, setShelves] = useState([])

  useEffect(() => fetchMyBooks(), [])

  const fetchMyBooks = async () => {
    try {
      const books = await BooksAPI.getAll();
      setBooks(books)
      setIsLoaded(false)
      setShelves(books.map(book => ({ id: book.id, shelf: book.shelf })))
    } catch (error) {
      console.error(error);
    }
  }

  const updateShelf = (id, shelf) => {
    BooksAPI.update({ id }, shelf).then(() => fetchMyBooks())
  }

  const search = async query => {
    const searchedQuery = await BooksAPI.search(query);
    try {
      if (query.length !== 0) return setSearchBooks(searchedQuery)
      setSearchBooks([])
    } catch (error) {
      console.error(error);
    }
  }

  const globalCtx = { books, isLoaded, searchBooks, shelves, updateShelf }

  return (
    <Context value={globalCtx}>
      <Container fluid="md">
        <Topbar />
        <Route exact path='/search' render={() => (
          <SearchBar
            searchBooks={searchBooks}
            onSearch={search}
          />
        )} />
        <Route exact path='/' component={Bookcase} />
      </Container>
    </Context>
  )
}

export default BooksApp