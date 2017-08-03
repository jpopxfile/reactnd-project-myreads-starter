import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {
	
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
						  <div className="bookshelf-books">
						    <ol className="books-grid">
						    {shelf.books.map((book) => (
						      <li>
						        <div className="book">
						          <div className="book-top">
						            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks||{}).smallThumbnail})` }}></div>
						            <div className="book-shelf-changer">
						              <select>
						                <option value="none" disabled>Move to...</option>
						                <option value="currentlyReading">Currently Reading</option>
						                <option value="wantToRead">Want to Read</option>
						                <option value="read">Read</option>
						                <option value="none">None</option>
						              </select>
						            </div>
						          </div>
						          <div className="book-title">{ book.title }</div>
						          {book.authors.map((author) => (
						          	<div className="book-authors">{ author }</div>
						          ))}
						        </div>
						      </li>
						    ))}
						    </ol>
						  </div>

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

export default BookShelf