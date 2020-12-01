import React from 'react';
import ListOfBooksPerShelf from './ListOfBooksPerShelf';

const Bookshelf = props => {
	return (
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{props.shelf.category}</h2>
				<div className="bookshelf-books">

					{/* Render the list of books per shelf */}
					<ListOfBooksPerShelf books={props.books} shelf={props.shelf} />

				</div>
			</div>
		</div>
	)
}

export default Bookshelf