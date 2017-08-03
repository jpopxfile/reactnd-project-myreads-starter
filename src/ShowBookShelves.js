import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ShowBookShelves extends Component {
	
	state = {
		shelfBooks : []
	}

	render() {
		const { shelfBooks } = this.state
		const { books } = this.props
		const shelves = [
			{
			tag:"currentlyReading",
			title: "Current Reading"
			}, 
			{
			tag:"wantToRead",
			title: "Want to Read"
			}, 
			{
			tag:"read",
			title: "Read"
			}
			]
		
		shelves.map((shelf) => shelf["books"] = books.filter((b) => b.shelf === shelf.tag))
		console.log(shelves)

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
					{shelves.map((shelf) => (
						<div className="bookshelf">
							<h2 className="bookshelf-title">{ shelf.title}</h2>
							{console.log(shelf.books)}
							<BookShelf books={shelf.books} />

	            <div className="open-search">
	              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
	            </div>
						</div>
					))}

					</div>
				</div>
			</div>

		)

	}

}

export default ShowBookShelves