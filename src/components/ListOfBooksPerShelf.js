import React from 'react';
import Book from './Book';

const ListOfBooksPerShelf = props => <ol className="books-grid">
	{props.books.map(book => <Book key={book.id} book={book} />)}
</ol>

export default ListOfBooksPerShelf