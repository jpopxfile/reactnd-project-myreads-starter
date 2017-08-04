import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component{

	render() {

	const { books, modifyBook } = this.props

	return (
		<div className="bookshelf-books">
	    <ol className="books-grid">

	    {books.map((book) => (
	      <li>

	      	<Book book={book} modifyBook={modifyBook}/>
	      	
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