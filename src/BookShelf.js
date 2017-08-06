import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component{

  static propTypes = {
    books: PropTypes.array.isRequired,
    modifyBook: PropTypes.func.isRequired,
    bookShelfBooks: PropTypes.array
  }

	render() {

	const { books, modifyBook, bookShelfBooks } = this.props

	return (
		<div className="bookshelf-books">
	    <ol className="books-grid">

	    {books.map((book) => (
	      <li key={book.id}>
	      	<Book book={book} modifyBook={modifyBook} bookShelfBooks={bookShelfBooks}/>
	      </li>
	    ))}
	    </ol>
	  </div>
		)
	}
}

export default BookShelf

BookShelf.defaultProps = {
	books: []
}