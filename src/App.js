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

  modifyBook(book,shelf){
    if (shelf === "none"){
      console.log("rm")
      this.removeBook(book)
    }
    else{
      console.log("add")
      this.addBook(book,shelf)
    }
  }


  removeBook(book){
    console.log("Real remove")
    BooksAPI.update(book,"none")
    /*
    this.setState((state) => ({
      books : state.books.filter((b) => b.id !== book.id)
    }))*/
    
  }

  static addBook(book, shelf){
    console.log("Adding book")
    
    BooksAPI.update(book, shelf)
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
          modifyBook={ this.modifyBook}
           />
        )} />
        <Route exact path='/' render={() => (
          <ShowBookShelves 
          books={ books }
          modifyBook={ this.modifyBook }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
