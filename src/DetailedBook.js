import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class DetailedBook extends Component{
  static propTypes = {
    books: PropTypes.string.isRequired
  }

	state = {
		book: {},
		exists: false
	}

	getBookInfo = (bookId) => {

		BooksAPI.get(bookId).then((b) =>{
			this.setState({
				book : b,
				exists: true
			})
		}).catch((e)=>{
			this.setState({
				book : {},
				exists: false
			})
		})

	} 

	componentWillMount(){
		this.getBookInfo(this.props.match.params.bookId)
	}


  render(){
		const {book} = this.state

		if (book.title)	 {
			return(
				<div>
					<div className="detail-book">

						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks||{}).smallThumbnail})` }}></div>
							</div>
							<div className="book-title">{ book.title }</div>

							{(book.authors||[]).map((author) => (
								<div className="book-authors" key={book.id + author}>{ author }</div>
							))}

							<div className="book-publisher">{book.publisher}</div>
							<div className="book-link"><a href={book.canonicalVolumeLink}>Link</a></div>
						</div>

					</div>
					<div className="book-description">
						<div>Description: {book.description}</div>
					</div>
	
					<Link className="back-to" to="/">Back to bookshelf</Link>
				</div>
			)
		}

		return (
			<div className="detail-book">
				<h1>Loading</h1>
				<Link className="back-to" to="/">Back to bookshelf</Link>
			</div>
		)
	}
}

export default DetailedBook

DetailedBook.defaultProps = {
	book: {}
}