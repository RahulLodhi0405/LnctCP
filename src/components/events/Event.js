import React from 'react';
import Countdown from '../Countdown/Countdown'; 

import './Event.css';

const Events = () => {
  const events = [
    {
      title: 'Code Sprint',
      date: '2024-12-05T00:00:00',  // Make sure to use an exact date-time format
      description: 'Compete with the best coders in a 5-hour challenge and showcase your competitive programming skills.',
    },
    {
      title: 'Hackathon 2.0',
      date: '2025-01-10T00:00:00',
      description: 'Team up, brainstorm, and build something innovative in 24 hours with your team.',
    },
    {
      title: 'CP Bootcamp',
      date: '2025-02-15T00:00:00',
      description: 'Intensive bootcamp focusing on advanced problem-solving techniques.',
    },
  ];

  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-card-content">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p> <br></br>
              <Countdown eventDate={event.date} /> <br></br> <br></br>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
