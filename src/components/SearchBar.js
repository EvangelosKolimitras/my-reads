import React from 'react';
import { Link } from 'react-router-dom'
import * as API from '../BooksAPI'
import { Book } from './Book'
import { filter, isArray, log } from '../utils/fns'
export default class SearchBar extends React.Component {

	state = {
		value: "",
		books: this.props.books
	}

	/* 
		Originaly the server sends the response without the property "shelf".
		The addProperty method acts as a proxy which takes the incoming object and
		adds the propert "shelf" on it.	
	*/
	addProp = (target, property) => {
		let updatedTarget = []
		for (let prop of target) {
			if (property in prop) return
			let updatedObject = Object.assign({}, prop, { [property]: "wantToRead" || "read" || "currentlyReading" })
			updatedTarget = [...updatedTarget, updatedObject]
		}
		return updatedTarget
	}


	// This method handles the selection event
	onSearchHandler = (e) => {


		// Set the value state to the user's input
		const value = e.target.value;
		this.setState({ value })


		// We render nothing at all if the user has not typed anything yet or the input is empty
		if (value.length < 1)
			return this.setState({ value: "" })

		API.search(value).then(book => {

			log(book)
			let bks, books;


			/*
				Checks if the response is an array
				We transform the incoming data into an array in case the response has only one item
				If the server sends more than one item then by default it will be an array
				In case the server sends only one type of data (eg. {}) then we put it into an array
				so we can loop over it and render it.
	
				--> Check isArray(arr) for the implmentation
			*/
			bks = filter(isArray(book))(book => book.imageLinks !== undefined)


			// Add the shelf property to a book
			books = this.addProp(bks, "shelf")


			this.setState({ books })

		})
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
									<Book
										key={book.id}
										book={book}
										selectValue={book.shelf}
										changeShelfHandler={e => this.props.changeShelfHandler(e, book)}
									/>
							) : null
						}
					</ol>
				</div>
			</div >
		)
	}
}
