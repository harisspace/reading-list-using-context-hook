import React, { createContext, useReducer } from 'react'
import {bookReducer} from '../reducers/bookReducer'

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, dispatchBook] = useReducer(bookReducer, [])

    return (
        <BookContext.Provider value={{ books: books, dispatchBook: dispatchBook}}>
            { props.children }
        </BookContext.Provider>
    )
}
