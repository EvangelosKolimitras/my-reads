import React from 'react'

const Book = props => {
	const { componentIsRenderedBy, authors, title, cover, shelfOfCurrentBook, id, onUpdateShelf, shelf } = props
	let bookShelf = (componentIsRenderedBy === 'search' && shelf.forEach((b) => b.id === id && b.shelf !== undefined && b.shelf)) || shelfOfCurrentBook

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover">
						<img src={cover !== undefined ? cover.thumbnail : 'https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'} alt={title} />
					</div>
					<div className="book-shelf-changer">
						<select defaultValue={bookShelf !== undefined && bookShelf || 'none'} onChange={(e) => onUpdateShelf(id, e.target.value)} >
							<option disabled>Move to...</option>
							<option disabled={bookShelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
							<option disabled={bookShelf === "wantToRead"} value="wantToRead">Want to Read</option>
							<option disabled={bookShelf === "read"} value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title !== undefined && title || "No title"} </div>
				<div className="book-authors">{authors !== undefined && authors || "Anonymous"}</div>
			</div>
		</li>
	)
}

export default Book