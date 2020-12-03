import React from 'react'
import { Book } from './Book';

const Shelf = props => {
	return (
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">{props.shelf.category}</h2>
				<div className="bookshelf-books">

					{/* Render the list of books per shelf */}
					<ol className="books-grid">
						{props.shelf?.books.map(book => {
							return (<>
								<li key={book.id}>
									<Book
										book={book}
										changeShelfHandler={props.changeShelfHandler}
										shelf={props.shelf.shelf}
										selectValue={props.selectValue}
									/>
								</li>
							</>)
						}
						)
						}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Shelf