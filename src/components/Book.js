import React from 'react'


export const Book = props => {
	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover"
					style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
				<div className="book-shelf-changer">
					{/* Dropdown menu for changing shelf */}
					<select  >
						<option disabled>Move to...</option>
						<option value="currentlyReading">Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>

			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{`${props.book.authors}`}</div>
		</div>
	)
}