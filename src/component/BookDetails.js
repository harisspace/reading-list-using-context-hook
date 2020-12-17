import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { BookContext } from '../contexts/BookContext'
import './list.css'

export default function BookDetails({book}) {
    const { dispatchBook } = useContext(BookContext);

    const handleClick = () => {
        dispatchBook({ type: "REMOVE_BOOK", book: book })
    }

    return (
        <ListGroup className="mb-3" id="list" onClick={handleClick}>
            <ListGroup.Item className="text-center">{book.title} - {book.author}</ListGroup.Item>
        </ListGroup>
    )
}
