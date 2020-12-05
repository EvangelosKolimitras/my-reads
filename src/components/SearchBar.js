import React from 'react';
import { Link } from 'react-router-dom'
import * as API from '../BooksAPI'
import { Book } from './Book'

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
						{this.state.value.trim() !== '' ?
							this.state.books.map(
								book =>
									<li key={book.id}>
										<Book
											book={book}
											changeShelfHandler={e => this.props.changeShelfHandler(e, book)}
										/>
									</li>
							) : null
						}
					</ol>
				</div>
			</div>
		)
	}
}