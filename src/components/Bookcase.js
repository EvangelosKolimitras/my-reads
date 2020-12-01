import React from 'react';
import BookShelf from './BookShelf';


const Bookcase = props => <div className="list-books">
	<div className="list-books-title">
		<h1>MyReads</h1>
	</div>
	<div className="list-books-content">
		{
			props.categories.map(shelf => (
				<BookShelf
					key={shelf.id}
					shelf={shelf}
					books={props.books}
				/>
			))
		}
	</div>
</div>

export default Bookcase