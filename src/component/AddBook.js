import React, { useState, useContext } from 'react'
import { BookContext } from '../context/BookContext';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { dispatchBook } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchBook({ type: "ADD_BOOK", book: {
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    }

    return (
        <div className="addBook">
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Input your book title" onChange={e => setTitle(e.target.value)} required />
                <input type="text" value={author} placeholder="Input your book author" onChange={e => setAuthor(e.target.value)} required />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AddBook
