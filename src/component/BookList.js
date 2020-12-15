import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails';

function BookList() {
    const { books } = useContext(BookContext);

    return books.length? (
        <div className="bookList">
            {
                books.map((book,key) => <BookDetails book={book} key={key} />)
            }
        </div>
    ) : (
        <div className="bookList">
            No book to read, hello free time :)
        </div>
    )
}

export default BookList
