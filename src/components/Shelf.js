import React from "react";
import Renderer from "./Renderer"
const Shelf = props => {

	const { label, books, currentCategoryShelf, onUpdateShelf, isLoaded, shelf } = props

	const booksOfCurrentShelf = books.filter((book) => book.shelf === currentCategoryShelf)

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{label} | {booksOfCurrentShelf.length === 1 ? `${booksOfCurrentShelf.length} book` : `${booksOfCurrentShelf.length} books`} </h2>
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
