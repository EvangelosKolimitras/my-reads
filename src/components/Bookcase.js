import React from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom'

const Bookcase = props => {

	const { books, onUpdateShelf, isLoaded } = props

	const categories = [
		{ id: 1, label: "Currently Reading", category: "currentlyReading" },
		{ id: 2, label: "To read", category: "wantToRead" },
		{ id: 3, label: "Read", category: "read" }
	]

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
				<div>{books.length} books in total</div>
			</div>
			<div className="list-books-content">
				<div>
					{
						categories.map(category => (
							<Shelf
								key={category.id}
								books={books}
								isLoaded={isLoaded}
								label={category.label}
								currentCategoryShelf={category.category}
								onUpdateShelf={onUpdateShelf}
							/>
						))
					}
				</div>
			</div>
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		</div>
	)
}

export default Bookcase