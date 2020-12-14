import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Book from "./Book";

const Renderer = books => args => {
	const { shelf, onUpdateShelf, isLoaded, componentIsRenderedBy } = args; /* The property shelf is coming only from the Search component */
	return books.length !== undefined ? books.map((book) =>
		<Book
			authors={book.authors}
			title={book.title}
			cover={book.imageLinks}
			categories={book.categories}
			shelf={shelf}
			id={book.id}
			componentIsRenderedBy={componentIsRenderedBy}
			onUpdateShelf={onUpdateShelf}
			key={book.id} />
	) : noBooks(isLoaded)
}
const noBooks = isLoaded =>
	<div className="no-books">
		{isLoaded ? <Spinner animation="border" variant="primary" /> : 'There are no books.'}
	</div>

export default Renderer