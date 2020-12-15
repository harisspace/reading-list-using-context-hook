import React, { createContext, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatchBook] = useReducer(bookReducer, [])

    return (
        <BookContext.Provider value={{ books, dispatchBook }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider
