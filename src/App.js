import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Nav from './component/Nav'
import BookContextProvider from './contexts/BookContext'
import BookList from './component/BookList'
import BookForm from './component/BookForm'

function App() {
  return (
    <Container>
      <Card className="my-3">
        <BookContextProvider>
          <Nav />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </Card>
    </Container>
  );
}

export default App;
