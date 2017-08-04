import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component{

	render() {

	const { books, removeBook } = this.props

	return (
		<div className="bookshelf-books">
	    <ol className="books-grid">

	    {books.map((book) => (
	      <li>

	      	<Book book={book} removeBook={removeBook}/>
	      	
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