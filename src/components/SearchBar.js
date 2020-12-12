import React from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import { filter, isArray } from '../utils/fns'

const SearchBar = props => {

	const { onSearch, shelf, books, onUpdateShelf } = props

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">Close</Link>
				<div className="search-books-input-wrapper">
					<input
						onChange={(e) => onSearch(e.target.value)}
						type="text"
						placeholder="Search by title or author" />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid"> {render(books)(shelf, onUpdateShelf)} </ol>
			</div>

		</div>
	)
}

const render = (books) => (shelf, onUpdateShelf) => books !== undefined && books.map((book) => (
	<Book
		authors={book.authors}
		title={book.title}
		cover={book.imageLinks}
		categories={book.categories}
		shelf={shelf}
		id={book.id}
		renderedBy='search'
		onUpdateShelf={onUpdateShelf}
		key={book.id} />
))
export default SearchBar