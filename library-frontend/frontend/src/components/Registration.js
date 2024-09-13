import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Registration.css';

function Registration() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:8080/api/users/register', {
              first,
              last,
              username,
              password,
              roll,
              email,
          });
          console.log('User registered successfully:', response.data);
      } catch (error) {
          console.error('Error registering user:', error.response ? error.response.data : error.message);
      }
  };

  return (
    <section>
      <div className="reg_img">
        <div className="box2">
          <h1>Library Management System</h1>
          <h2>User Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="login">
            <input type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} required /> <br /><br />
<input type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} required /> <br /><br />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /> <br /><br />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br /><br />
              <input type="text" placeholder="Roll No" value={roll} onChange={(e) => setRoll(e.target.value)} required /><br /><br />
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
