import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ShowBookShelves from './ShowBookShelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  removeBook(book){
    this.setState((state) => ({
      books : state.books.filter((b) => b.id !== book.id)
    }))
    BooksAPI.update(book,"none")

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
          <SearchBooks
          removeBook={ this.removeBook}
           />
        )} />
        <Route exact path='/' render={() => (
          <ShowBookShelves 
          books={ books }
          removeBook={ this.removeBook }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
