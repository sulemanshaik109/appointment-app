import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:5000/api/appointments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment History</h2>
      {error && <p>{error}</p>}
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {new Date(appointment.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
