import React, { useContext } from "react";
import Renderer from "./Renderer"
import { Container, Badge, Row, ListGroup } from "react-bootstrap"
import { C as ctx } from './Context'

const Shelf = props => {
	const { books } = useContext(ctx)
	const { label, currentCategoryShelf, onUpdateShelf, shelf } = props
	const booksOfCurrentShelf = books.filter((book) => book.shelf === currentCategoryShelf)
	return (
		<Row className="justify-content-md-center">
			<Container>
				<h2 className="h2 ">{label}</h2>
				<Badge pill variant="info">{booksOfCurrentShelf.length === 1 ? `${booksOfCurrentShelf.length} book` : `${booksOfCurrentShelf.length} books`}</Badge>
				<ListGroup bsPrefix="books-grid">
					{
						Renderer(booksOfCurrentShelf)({ books, shelf, onUpdateShelf, componentIsRenderedBy: "main" })
					}
				</ListGroup>
			</Container>
		</Row>
	)
}

export default Shelf;
