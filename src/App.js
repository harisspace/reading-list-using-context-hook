import React from 'react'
import AddBook from './component/AddBook'
import BookList from './component/BookList'
import Navbar from './component/Navbar'
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <AddBook />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
