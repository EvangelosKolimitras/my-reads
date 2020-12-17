import React from 'react';
import { Link } from 'react-router-dom'
import Renderer from './Renderer';
import { Form, ListGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const SearchBar = props => {
	const { onSearch, books } = props
	return (
		<>
			<Form inline>
				<Form.Group className="justify-content-end" >
					<Link to="/"><Icon.ArrowLeft className="mr-2" size={30} /></Link>
					<Form.Control
						size="xl"
						type="text"
						placeholder="Search for a book"
						autoFocus
						onChange={(e) => onSearch(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<ListGroup bsPrefix="books-grid">
				{Renderer(books)({ componentIsRenderedBy: "search" })}
			</ListGroup>
		</>
	)
}

export default SearchBar