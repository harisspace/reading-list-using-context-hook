import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails';

export default function BookList() {
    const { books } = useContext(BookContext);

    return books.length? (
        books.map(book => {
            return (
            <BookDetails book={book} key={book.id} />
            )
        })
    ) : (
        <h1 className="text-center">Have no book list now, hello free time</h1>
    );
}
