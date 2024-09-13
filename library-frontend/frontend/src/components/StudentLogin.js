import React, { useState } from 'react';
import axios from '../utils/axios'; // Adjust the path to your axios instance if needed
import '../CSS/Student.css';

function StudentLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    try {
      // Make sure the URL matches your backend endpoint
      const response = await axios.post('/users/login', credentials); // No `/api` prefix needed
      console.log('Login successful:', response.data);
      // Redirect or show success message
      // For example: window.location.href = "/dashboard";
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setError('Invalid username or password'); // Set error message
    }
  };

  return (
    <section>
      <div className="log_img">
        <div className="box1">
          <h1>Library Management System</h1>
          <h2>User Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="login">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
              <br /><br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <br /><br />
              <button type="submit">Login</button>
            </div>
          </form>
          {error && <p className="error">{error}</p>}
          <p>
            <a href="#">Forgot password?</a>
            <br />
            New to this website? <a href="/registration">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudentLogin;
