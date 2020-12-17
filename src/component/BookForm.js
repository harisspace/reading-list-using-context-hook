import React, { useState, useContext } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const { dispatchBook, books } = useContext(BookContext);
    console.log(books)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchBook({ type: "ADD_BOOK", book: {
            title,
            author
        }})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <FormControl placeholder="input your title book" value={title} required onChange={(e) => setTitle(e.target.value)} />
            </InputGroup>
            <InputGroup> 
                <FormControl placeholder="input the author" value={author} required onChange={(e) => setAuthor(e.target.value)} />
            </InputGroup>
            <div className="text-center my-2">
                <Button type="submit" variant="outline-secondary">Button</Button>
            </div>
        </form>
    )
}
