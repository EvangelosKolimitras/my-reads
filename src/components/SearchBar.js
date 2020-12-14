import React from 'react';
import { Link } from 'react-router-dom'
import Renderer from './Renderer';

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
				<ol className="books-grid">
					{
						Renderer(books)({ shelf, onUpdateShelf, componentIsRenderedBy: "search" })
					}
				</ol>
			</div>
		</div>
	)
}

export default SearchBar