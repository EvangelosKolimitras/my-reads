import React from 'react';
import ListOfBooksPerShelf from './ListOfBooksPerShelf';

export default props => {
	return (
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{props.bookSelf.bookShelfTitle}</h2>
				<div className="bookshelf-books">

					{/* Render the list of books per shelf */}
					<ListOfBooksPerShelf bookSelf={props.bookSelf} />

				</div>
			</div>
		</div>
	)
}