import React from 'react';
import { Link } from 'react-router-dom'
import * as API from '../BooksAPI'
import { Book } from './Book'

export default class SearchBar extends React.Component {

	state = {
		value: "",
		books: []
	}

	checkIfArray = (arr) => Array.isArray(arr) ? [...arr] : Array.from(arr)

	// Originaly the server sends the response without the property "shelf"
	addProperty = (target, property) => {
		let updatedTarget = []
		for (let prop of target) {
			if (property in prop) return
			let updatedObject = Object.assign({}, prop, { [property]: "" })
			updatedTarget = [...updatedTarget, updatedObject]
		}
		return updatedTarget
	}

	onSearchHandler = (e) => {
		const value = e.target.value;
		this.setState({ value })
		!value.length < 1 ? API.search(value).then(b => {

			// Checks if the response is an array
			let bks = this.checkIfArray(b).filter((book) => book.imageLinks !== undefined)

			// Add the shelf property to a book
			let books = this.addProperty(bks, "shelf")
			this.setState({ books })
		}) : this.setState({ value: "" })
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
								book => {
									return (
										<li key={book.id} >
											<Book
												book={book}
												changeShelfHandler={e => this.props.changeShelfHandler(e, book)}
											/>
										</li>
									)
								}
							) : null
						}
					</ol>
				</div>
			</div >
		)
	}
}
