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

  modifyBook = (book, shelf) =>{
    if (shelf === "none"){
      this.removeBook(book)
      
    }
    else{
      this.addBook(book,shelf)
    }
  }

  removeBook = (book) => {
    BooksAPI.update(book,"none").then(response =>{
      this.setState((state) => ({
        books : state.books.filter((b) => b.id !== book.id)
      }))
    })
  }

  addBook = (book,shelf) => {
    book.shelf = shelf

    //check if book is on shelf
    let bookOnShelf = this.state.books.filter((b) => b.id === book.id)
    let onShelf = bookOnShelf.length > 0

    BooksAPI.update(book,shelf).then(response =>{
      if (onShelf){
        this.setState((state) => ({
          books : state.books.filter((b) => b.id !== book.id).concat(book)
        }))
      }
      else{
        this.setState((state) => ({
          books : state.books.concat([book])
        }))
      }
    })
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
          bookShelfBooks={ books }
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
