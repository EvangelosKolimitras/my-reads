import React from 'react';
import ListOfBooksPerShelf from './ListOfBooksPerShelf';

const Bookshelf = props => {
	return (
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{props.bookSelf.bookShelfTitle}</h2>
				<div className="bookshelf-books">

					{/* Render the list of books per shelf */}
					<ListOfBooksPerShelf books={props.books} bookSelf={props.bookSelf} />

				</div>
			</div>
		</div>
	)
}

export default Bookshelf