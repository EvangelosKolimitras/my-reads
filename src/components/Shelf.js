import React from "react";
import Renderer from "./Renderer"
import { Badge } from "react-bootstrap"

const Shelf = props => {
	const { label, books, currentCategoryShelf, onUpdateShelf, isLoaded, shelf } = props
	const booksOfCurrentShelf = books.filter((book) => book.shelf === currentCategoryShelf)
	return (
		<div className="bookshelf">
			<h2 className="h2 bookshelf-title">{label} </h2>
			<Badge variant="secondary">{booksOfCurrentShelf.length === 1 ? `${booksOfCurrentShelf.length} book` : `${booksOfCurrentShelf.length} books`}</Badge>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						Renderer(booksOfCurrentShelf)({ shelf, onUpdateShelf, isLoaded, componentIsRenderedBy: "main" })
					}
				</ol>
			</div>
		</div>
	)
}

export default Shelf;
