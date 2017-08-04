import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ShowBookShelves from './ShowBookShelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })

  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks />
        )} />
        <Route exact path='/' render={() => (
          <ShowBookShelves books={ books }/>
        )} />
      </div>
    )
  }
}

export default BooksApp
