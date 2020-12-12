import React from "react";
import Book from "./Book";
import IosRefresh from 'react-ionicons/lib/IosRefresh'

const Shelf = props => {

	const { label, books, currentCategoryShelf, onUpdateShelf, isLoaded, shelf } = props

	const booksOfCurrentShelf = books.filter((book) => book.shelf === currentCategoryShelf)

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{label} | {booksOfCurrentShelf.length} books</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{render(booksOfCurrentShelf)(isLoaded, shelf, onUpdateShelf)}
				</ol>
			</div>
		</div>
	)
}

const render = books => (isLoaded, shelf, onUpdateShelf) => books.length === 0 ? noBooks(isLoaded) : books.map((book) => (
	<Book
		key={book.id}
		authors={book.authors}
		title={book.title}
		cover={book.imageLinks}
		categories={book.categories}
		shelfOfCurrentBook={book.shelf}
		id={book.id}
		shelf={shelf}
		componentIsRenderedBy='main'
		onUpdateShelf={onUpdateShelf}
	/>
))

const noBooks = isLoaded => <div className="no-books">
	{isLoaded ? <IosRefresh fontSize="60px" color="#347eff" rotate={true} /> : 'There are no books.'}
</div>

export default Shelf;
