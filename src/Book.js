import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    modifyBook: PropTypes.func.isRequired,
    bookShelfBooks: PropTypes.array
  }

	render(){
		const {book, modifyBook, bookShelfBooks} = this.props

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
			},
			{
			tag:"none",
			title: "None"
			}
		]

		let realShelf

		//If search, check if book exists on bookshelf and update status
		if(bookShelfBooks){
				let tempBook = bookShelfBooks.filter((b) => b.id === book.id)
				if (tempBook.length > 0){
					realShelf = tempBook[0].shelf 
				}
		}


		return(
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks||{}).smallThumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select value={realShelf ? realShelf : book.shelf}
							onChange={(event) => modifyBook(book, event.target.value)}>
								<option value="none" disabled>Move to...</option>
								{shelves.map((shelf) => (
									<option value={shelf.tag} key={book.id + "-" + shelf.tag}>{shelf.title}</option>
								))}
							</select>
						</div>
					</div>
					<div className="book-title">{ book.title }</div>
					{(book.authors||[]).map((author) => (
						<div className="book-authors" key={book.id + author}>{ author }</div>
					))}
			</div>
			)
	}
}

export default Book

Book.defaultProps = {
	book: {}
}