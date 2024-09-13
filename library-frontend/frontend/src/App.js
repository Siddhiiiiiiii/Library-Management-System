import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import Registration from './components/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
