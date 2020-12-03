import React from 'react';
import Shelf from './Shelf';
const Header = ({ children }) => (
	<div className="list-books">
		<div className="list-books-title">
			<h1>MyReads</h1>
		</div>
		<div className="list-books-content">
			{children}
		</div>
	</div>
)

const Bookcase = ({ categories, changeShelfHandler, selectValue }) => {
	return (
		<Header>
			{
				/* Render the list of books per shelf */
				categories.map(shelf =>
					<Shelf
						key={shelf.id}
						changeShelfHandler={changeShelfHandler}
						shelf={shelf}
						selectValue={selectValue}
					/>
				)
			}
		</Header>
	)
}

export default Bookcase