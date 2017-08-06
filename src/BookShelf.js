import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component{

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