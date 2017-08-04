import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
	
	state = {
		query: '',
		showingBooks : []
	}

	updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query !== '') {
			BooksAPI.search(query,20).then((data) => {
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

  removeBook(){
		
	}

	render() {
		const { query, showingBooks } = this.state
		showingBooks.map((book) => {
			console.log("book.imageLinks", !!book.imageLinks)
		})
	
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
					<BookShelf books={showingBooks} remove={this.removeBook} />
					
    		</div>
      </div>
		)

	}

}

export default SearchBooks