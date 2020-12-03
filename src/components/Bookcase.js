import React from 'react';
import { Book } from './Book';
const Header = ({ children }) => (
	<div className="list-books">
		<div className="list-books-title">
			<h1>MyReads</h1>
		</div>
		<div className="list-books-content">
			{children}
		</div>
	</div>
)

const Bookcase = ({ categories, changeShelfHandler, selectValue }) => {
	return (
		<Header>
			{
				/* Render the list of books per shelf */
				categories.map(shelf => {
					return (
						<div key={shelf.id}>
							<div className="bookshelf">
								<h2 className="bookshelf-title">{shelf.category}</h2>
								<div className="bookshelf-books">

									{/* Render the list of books per shelf */}
									<ol className="books-grid">

										{
											shelf.books
												.map(book => {
													return (
														<>
															<li key={book.id}>
																<Book
																	book={book}
																	changeShelfHandler={changeShelfHandler}
																	shelf={shelf.shelf}
																	selectValue={selectValue}
																/>
															</li>
														</>
													)
												})
										}
									</ol>
								</div>
							</div>
						</div>
					)
				})
			}
		</Header>
	)
}

export default Bookcase