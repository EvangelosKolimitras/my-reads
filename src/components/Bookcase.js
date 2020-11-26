import React from 'react';
import BookShelf from './BookShelf';

const Bookcase = props => <div className="list-books">
	<div className="list-books-title">
		<h1>MyReads</h1>
	</div>
	<div className="list-books-content">
		{
			props.bookshelves.map(bookSelf => (
				<BookShelf books={props.books} key={bookSelf.bookShelfID} bookSelf={bookSelf} />
			))
		}
	</div>
	<div className="open-search">
		<a onClick={props.onAddBookHandler}>Add a book</a>
	</div>
</div>

export default Bookcase