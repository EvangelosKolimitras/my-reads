import React from 'react'
import SelectOptions from './SelectOptions'

export const Book = props => {
	const { shelf, changeShelfHandler, book, selectValue } = props;
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover"
						style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
					<div className="book-shelf-changer">
						{/* Dropdown menu for changing shelf */}
						<SelectOptions
							shelf={shelf}
							changeShelfHandler={changeShelfHandler}
							book={book}
							selectValue={selectValue}
						/>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{`${book.authors}`}</div>
			</div>
		</li>
	)
}
