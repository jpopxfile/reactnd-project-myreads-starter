import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ShowBookShelves extends Component {

	render() {
		const { books, modifyBook } = this.props
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
						<div className="bookshelf" key={shelf.tag}>
							<h2 className="bookshelf-title">{ shelf.title}</h2>
							<BookShelf books={shelf.books} modifyBook={modifyBook} />

	            <div className="open-search">
	              <Link to='/search'>Add a book</Link>
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