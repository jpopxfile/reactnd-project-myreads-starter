import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
	
	state = {
		query: '',
		showingBooks : []
	}

	updateQuery = (query) => {
		let trimQuery = query.trim()
    this.setState({ query: trimQuery })
    if (query !== '') {
			BooksAPI.search(trimQuery,20).then((data) => {
				console.log(data)
				if (data.length > 0) {
					this.setState((state) => ({
						showingBooks: data
					}))
				}
				else{
					this.setState((state) => ({
					showingBooks: []
					}))
				}
			})

		}
		else{
		this.setState((state) => ({
		  showingBooks: []
		  }))
		}
  }


	render() {
		const { query, showingBooks } = this.state
		const { modifyBook } = this.props
		showingBooks.map((book) => {
			console.log("book.imageLinks", !!book.imageLinks)
		})
	
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
            placeholder="Search by title or author" 
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
            
          </div>
        </div>
        
				<div className="search-books-results">
					{console.log("aaa",showingBooks)}
					<BookShelf books={showingBooks} modifyBook={modifyBook} />
					
    		</div>
      </div>
		)

	}

}

export default SearchBooks