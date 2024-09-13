import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, ButtonGroup } from 'react-bootstrap';

const Dashboard = () => {
  const [view, setView] = useState('availableBooks');
  const [availableBooks, setAvailableBooks] = useState([]);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAvailableBooks();
    fetchIssuedBooks();
  }, []);

  const fetchAvailableBooks = async () => {
    try {
      const response = await fetch('/api/books/available');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAvailableBooks(data);
    } catch (error) {
      setError(`Error fetching available books: ${error.message}`);
      console.error('Error fetching available books:', error);
    }
  };

  const fetchIssuedBooks = async () => {
    try {
      const response = await fetch('/api/books/issued');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIssuedBooks(data);
    } catch (error) {
      setError(`Error fetching issued books: ${error.message}`);
      console.error('Error fetching issued books:', error);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '800px' }}>
      {error && <div className="alert alert-danger">{error}</div>}
      <Card
        className="p-4"
        style={{
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f8f9fa',
        }}
      >
        <Card.Header
          as="h3"
          className="text-center mb-4"
          style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '10px' }}
        >
          Library Dashboard
        </Card.Header>
        <ButtonGroup className="mb-4 d-flex justify-content-center">
          <Button
            variant={view === 'availableBooks' ? 'primary' : 'outline-primary'}
            onClick={() => setView('availableBooks')}
            style={{
              minWidth: '150px',
              borderRadius: '20px',
              boxShadow: view === 'availableBooks' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            Available Books
          </Button>
          <Button
            variant={view === 'issuedBooks' ? 'primary' : 'outline-primary'}
            onClick={() => setView('issuedBooks')}
            style={{
              minWidth: '150px',
              borderRadius: '20px',
              boxShadow: view === 'issuedBooks' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            Issued Books
          </Button>
        </ButtonGroup>
        {view === 'availableBooks' && (
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published Year</th>
                </tr>
              </thead>
              <tbody>
                {availableBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishedYear}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        )}
        {view === 'issuedBooks' && (
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Issue Date</th>
                </tr>
              </thead>
              <tbody>
                {issuedBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{new Date(book.issueDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default Dashboard;
