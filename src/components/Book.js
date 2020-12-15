import React from 'react'
import { Card, Form } from 'react-bootstrap'
const Book = props => {
	const { componentIsRenderedBy, authors, title, cover, shelfOfCurrentBook, id, onUpdateShelf, shelf } = props

	let bookShelf

	if (componentIsRenderedBy === 'search') {
		for (let book of shelf) {
			if (book.id === id && book.shelf !== undefined) {
				bookShelf = book.shelf
				break
			}
		}
	} else {
		bookShelf = shelfOfCurrentBook
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
			<Card style={{ width: '15rem', boxShadow: '0 .4px 10px rgba(0,0,0)' }}>
				<Card.Img height={250} variant="top" src={cover !== undefined ? cover.thumbnail : 'https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'} alt={title} />
				<Card.Body>
					<Card.Title> <h2 className="h3">{title || "No title"}</h2> </Card.Title>
					<Card.Text>{authors || "Anonymous"}</Card.Text>
				</Card.Body>
				<Form>
					<Form.Group>
						<Form.Control as="select" custom defaultValue={getShelfValue} onChange={(e) => onUpdateShelf(id, e.target.value)}>
							<option disabled>Move to...</option>
							<option disabled={bookShelf === "currentlyReading"} value="currentlyReading"> Currently Reading</option>
							<option disabled={bookShelf === "wantToRead"} value="wantToRead">Want to Read</option>
							<option disabled={bookShelf === "read"} value="read">Read</option>
							<option value="none">None</option>
						</Form.Control>
					</Form.Group>
				</Form>
			</Card>
		</li >
	)
}

export default Book