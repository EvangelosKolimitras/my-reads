import React from 'react';
import Book from './Book';

// this books array will populate the state of the books in the ListOfBooksPerShelf class component
const books = [
	{
		id: 1,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		cover: `url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`
	}
]

export default class ListOfBooksPerShelf extends React.Component {

	state = {
		title: this.props.title /* We receive the title */,
		books
	}

	render() {
		return (
			<ol className="books-grid">
				{ this.state.books.map(book => <Book key={book.id} book={book} />)}
			</ol>
		)
	}

}

