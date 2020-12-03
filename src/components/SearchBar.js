import React from 'react';
import { Link } from 'react-router-dom'
import * as API from '../BooksAPI'


export default class SearchBar extends React.Component {

	state = {
		value: "",
		books: []
	}

	fetchMovies = async () => {
		const response = API.getAll()
		const books = await response;
		return books.filter((book) => book.title.toLowerCase().trim().includes(this.state.value));
	}


	onSearchHandler = (e) => {
		this.setState(prevState => ({ value: e.target.value }))

		this.fetchMovies().then(books => this.setState({ books }))
	}

	render() {
		console.log(this.state.books);
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">

						<input
							value={this.state.value}
							name="searchInput"
							onChange={this.onSearchHandler}
							type="text"
							placeholder="Search by title or author" />

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.books.map(book => <li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover"
											style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
										<div className="book-shelf-changer">
											{/* Dropdown menu for changing shelf */}
											<select  >
												<option disabled>Move to...</option>
												<option value="currentlyReading">Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>

									<div className="book-title">{book.title}</div>
									<div className="book-authors">{`${book.authors}`}</div>
								</div>
							</li>)
						}
					</ol>
				</div>
			</div>
		)
	}
}