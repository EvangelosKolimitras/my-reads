import React from 'react'

const Book = props => {
	const { componentIsRenderedBy, authors, title, cover, shelfOfCurrentBook, id, onUpdateShelf, shelf } = props

	let bookShelf = shelfOfCurrentBook;
	if (componentIsRenderedBy === 'search') {
		for (let book of shelf) {
			if (book.id === id) {
				bookShelf = book.shelf
				break
			}
		}
	}

	const getShelfValue = () => {
		console.log(shelf);
		let bookShelf = 'none';
		shelf.forEach((book) => {
			if (id === book.id) {
				bookShelf = book.shelf;
			}
		});
		return bookShelf;
	}

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover">
						<img src={cover !== undefined ? cover.thumbnail : 'https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'} alt={title} />
					</div>
					<div className="book-shelf-changer">
						<select defaultValue={getShelfValue} onChange={(e) => onUpdateShelf(id, e.target.value)} >
							<option disabled>Move to...</option>
							<option disabled={bookShelf === "currentlyReading"} value="currentlyReading"> Currently Reading</option>
							<option disabled={bookShelf === "wantToRead"} value="wantToRead">Want to Read</option>
							<option disabled={bookShelf === "read"} value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title || "No title"} </div>
				<div className="book-authors">{authors || "Anonymous"}</div>
			</div>
		</li>
	)
}

export default Book