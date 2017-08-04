import React, { Component } from 'react'

class Book extends Component{
	
	render(){
		const {book} = this.props

		const shelves = [
			{
			tag:"currentlyReading",
			title: "Current Reading"
			}, 
			{
			tag:"wantToRead",
			title: "Want to Read"
			}, 
			{
			tag:"read",
			title: "Read"
			},
			{
			tag:"none",
			title: "None"
			}
		]

		return(
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks||{}).smallThumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select value={book.shelf}>
								<option value="none" disabled>Move to...</option>
								{shelves.map((shelf) => (
									<option value={shelf.tag}>{shelf.title}</option>
								))}
							</select>
						</div>
					</div>
					<div className="book-title">{ book.title }</div>
					{(book.authors||[]).map((author) => (
						<div className="book-authors">{ author }</div>
					))}
			</div>
			)
	}

}

export default Book

Book.defaultProps = {
	book: {}
}