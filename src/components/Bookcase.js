import React from 'react';

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

const Bookcase = props => {
	const state = { status: "" }
	return (
		<Header>
			{
				/* Render the list of books per shelf */
				props.categories.map(shelf => {
					return (
						<div key={shelf.id}>
							<div className="bookshelf">
								<h2 className="bookshelf-title">{shelf.category}</h2>
								<div className="bookshelf-books">

									{/* Render the list of books per shelf */}
									<ol className="books-grid">
										{
											props.books
												.filter(book => book.shelf === shelf.shelf)
												.map(book => {
													return (
														<>
															<li key={book.id}>
																<div className="book">
																	<div className="book-top">

																		<div className="book-cover"
																			style={{ width: 128, height: 193, backgroundImage: `url(${book.cover})` }}></div>
																		<div className="book-shelf-changer">

																			{/* Dropdown menu for changing shelf */}
																			<select onChange={e => { }} value={state.status} >
																				<option disabled>Move to...</option>
																				<option value="currentlyReading">Reading</option>
																				<option value="wantToRead">Want to Read</option>
																				<option value="read">Read</option>
																				<option>None</option>
																			</select>
																		</div>
																	</div>

																	<div className="book-title">{book.title}</div>
																	<div className="book-authors">{`${book.authors}`}</div>
																</div>
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