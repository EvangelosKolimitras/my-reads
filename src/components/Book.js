import React from 'react';

export default class Book extends React.Component {
	state = {
		status: "None"
	}

	// Handles the reading status of the book
	bookShelfChanger = e => this.setState({ status: e.target.value })

	render() {
		const { book } = this.props
		return (
			<>
				<li>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.cover }}></div>
							<div className="book-shelf-changer">
								<select onChange={this.bookShelfChanger} value={this.state.status} >
									<option disabled>Move to...</option>
									<option>Reading</option>
									<option>Want to Read</option>
									<option>Read</option>
									<option>None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.author}</div>
					</div>
				</li>
			</>
		)
	}
} 