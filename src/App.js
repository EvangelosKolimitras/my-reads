import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Topbar from './components/Topbar'

import { Link } from 'react-router-dom'

import Bookcase from './components/Bookcase'
import SearchBar from './components/SearchBar'
import { Container } from 'react-bootstrap'

const BooksApp = props => {

  const [books, setBooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)
  const [shelves, setShelves] = useState([])

  useEffect(() => fetchMyBooks(), [])

  const fetchMyBooks = async () => {
    const books = await BooksAPI.getAll();
    try {
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

  return (
    <Container fluid="md">
      <Topbar />
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
    </Container>
  )
}

export default BooksApp