import React from 'react';
import BookShelf from './BookShelf';
export default props => <div className="list-books">
	<div className="list-books-title">
		<h1>MyReads</h1>
	</div>
	<div className="list-books-content">
		<BookShelf bookshelfTitles={props.bookshelfTitles} />
	</div>
	<div className="open-search">
		<a onClick={props.onAddBookHandler}>Add a book</a>
	</div>
</div>