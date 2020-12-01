import React from 'react';
import Book from './Book';

const ListOfBooksPerShelf = props => <ol className="books-grid">
	{props.books
		.filter(book => book.shelf === props.shelf.shelf)
		.map(book => <Book
			key={book.id}
			book={book}
			shelf={props.shelf}
		/>)}
</ol>

export default ListOfBooksPerShelf