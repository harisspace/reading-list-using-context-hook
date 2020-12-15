import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';

function BookDetails({ book }) {
    const { dispatchBook } = useContext(BookContext);

    return (
        <div className="bookList" onClick={() => dispatchBook({ type: 'REMOVE_BOOK', id: book.id})}>
            <ul>
                <li>{book.title}</li>
                <li>{book.author}</li>
            </ul>
        </div>
    )
}

export default BookDetails
