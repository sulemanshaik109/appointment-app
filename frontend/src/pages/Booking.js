import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  console.log(date)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/appointments',
        { date },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setMessage('Appointment booked successfully');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Book</button>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </form>
  );
};

export default Booking;
