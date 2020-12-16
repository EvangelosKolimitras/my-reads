import React from 'react';
import Shelf from './Shelf';
import { Container, Col } from 'react-bootstrap'
const Bookcase = props => {

	const { books, onUpdateShelf, isLoaded } = props

	const categories = [
		{ id: 1, label: "Currently Reading", category: "currentlyReading" },
		{ id: 2, label: "To read", category: "wantToRead" },
		{ id: 3, label: "Read", category: "read" }
	]

	return (
		<Container fluid="md">
			{
				categories.map(category => (
					<Shelf
						key={category.id}
						books={books}
						isLoaded={isLoaded}
						label={category.label}
						currentCategoryShelf={category.category}
						onUpdateShelf={onUpdateShelf}
					/>
				))
			}
		</Container>
	)
}

export default Bookcase