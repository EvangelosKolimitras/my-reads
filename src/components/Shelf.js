import React from "react";
import Renderer from "./Renderer"
import { Container, Badge, Row, ListGroup } from "react-bootstrap"

const Shelf = props => {
	const { label, books, currentCategoryShelf, onUpdateShelf, isLoaded, shelf } = props
	const booksOfCurrentShelf = books.filter((book) => book.shelf === currentCategoryShelf)
	return (
		<Row className="justify-content-md-center">
			<Container>
				<h2 className="h2 ">{label} </h2>
				<Badge pill variant="info">{booksOfCurrentShelf.length === 1 ? `${booksOfCurrentShelf.length} book` : `${booksOfCurrentShelf.length} books`}</Badge>
				<ListGroup bsPrefix="books-grid">
					{
						Renderer(booksOfCurrentShelf)({ shelf, onUpdateShelf, isLoaded, componentIsRenderedBy: "main" })
					}
				</ListGroup>
			</Container>
		</Row>
	)
}

export default Shelf;
