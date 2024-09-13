import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Books.css';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: '1925', image: 'https://hachette.imgix.net/books/9780762498130.jpg?auto=compress,format' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: '1960', image: 'https://th.bing.com/th/id/OIP.2GMxAqCpItxai1LYbPlmJwHaJJ?w=208&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 3, title: '1984', author: 'George Orwell', publishedYear: '1949', image: 'https://th.bing.com/th/id/OIP.8bTpGDLEYVpDlV8tD10XlQAAAA?w=195&h=319&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: '1813', image: 'https://th.bing.com/th/id/OIP.4G0HmINCNk8qfcGJ4U0tVgHaJ4?w=136&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', publishedYear: '1951', image: 'https://th.bing.com/th/id/R.cac52fbbefa83812774f681dbf874163?rik=v%2bHq2yBp%2f6RzYw&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2fc%2fcatcher-in-the-rye%2f9780316769488_custom-b6fc2e108f3865eb320720875c20e4f869da8065-s6-c30.jpg&ehk=fpDBmQJbSuHhhoBl2AYOifBz0QLtjPI7FBgIYnU65cM%3d&risl=&pid=ImgRaw&r=0' },
  { id: 6, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publishedYear: '1954', image: 'https://th.bing.com/th/id/OIP.hOQG35ySkusg3qg40n2G5QHaJ4?rs=1&pid=ImgDetMain' },
  { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: '1937', image: 'https://th.bing.com/th/id/OIP.To2r-UghMb79tPasgHo37wHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 8, title: 'Fahrenheit 451', author: 'Ray Bradbury', publishedYear: '1953', image: 'https://th.bing.com/th/id/OIP.vnIB_E61dgFYz2tA2D2UqAHaLR?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 9, title: 'Brave New World', author: 'Aldous Huxley', publishedYear: '1932', image: 'https://th.bing.com/th/id/OIP.cpzCZKY_Xvi5lKaTWeINowHaLY?w=201&h=309&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown', publishedYear: '2003', image: 'https://th.bing.com/th/id/OIP.9Ax9nJbE2bYt3zeSSY94VgHaKE?w=208&h=283&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 11, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: '1988', image: 'https://th.bing.com/th/id/OIP.K0FbWX-UYXGUrBGdJNHViQHaMQ?w=194&h=321&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 12, title: 'Jane Eyre', author: 'Charlotte Brontë', publishedYear: '1847', image: 'https://th.bing.com/th/id/OIP.LfrBolf8rjajfwHtTM1PVwHaKl?rs=1&pid=ImgDetMain' },
  { id: 13, title: 'Wuthering Heights', author: 'Emily Brontë', publishedYear: '1847', image: 'https://th.bing.com/th/id/OIP.DFZiKG8kjSofuwssrPt_SgHaLb?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  
];
const Books = () => {
    return (
      <div className="books-container">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Author: {book.author}</p>
              <p className="book-year">Published Year: {book.publishedYear}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default Books;