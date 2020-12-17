import React from 'react';
import Shelf from './Shelf';
import { Container } from 'react-bootstrap'
const Bookcase = props => {

	const { isLoaded } = props

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
						label={category.label}
						currentCategoryShelf={category.category}
						isLoaded={isLoaded}
					/>
				))
			}
		</Container>
	)
}

export default Bookcase