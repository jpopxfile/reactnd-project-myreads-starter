import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
	static propTypes = {
    bookShelfBooks: PropTypes.array.isRequired,
    modifyBook: PropTypes.func.isRequired
  }

	state = {
		query: '',
		showingBooks : []
	}

	updateQuery = (query) => {
    this.setState({ query: query })
    if (query !== '') {
			BooksAPI.search(query,20).then((data) => {

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

  clearQuery = () => {
    this.setState({
    	query: '',
    	showingBooks: []
    })
  }

	render() {
		const { query, showingBooks } = this.state
		const { modifyBook, bookShelfBooks } = this.props
	
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
          <button onClick={this.clearQuery}>Clear</button>
        </div>
        
				<div className="search-books-results">
					<BookShelf books={showingBooks} bookShelfBooks={bookShelfBooks} modifyBook={modifyBook} />
					
    		</div>
      </div>
		)

	}

}

export default SearchBooks