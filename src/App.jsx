// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AwardsPage from './AwardsPage.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import './index.css';
import Linkedln from './Linkedln.jsx';
import { addMessageToDatabase } from './firebaseUtils'; // Import the Firebase utility function
import AppContent from './AppContent'; // Import the AppContent component

function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (newMessage) => {
    setMessages([...messages, newMessage]);
    // Call the Firebase function to add the message to the database
    addMessageToDatabase(newMessage);
  };

  return (
    <Router>
      <div>
        <p><Link to="/app">Welcome to my resume!</Link></p>
        <div className="border">
          <nav>
            <ul>
              <li className="item"><Link to="/awards">Awards</Link></li>
              <li className="item"><Link to="/aboutme">About Me</Link></li>
              <li className="item"><Link to="/projects">Projects</Link></li>
              <li className="item"><Link to="/linkedln">Linkedln</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/app" element={<AppContent handleMessageChange={handleMessageChange} messages={messages} />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/linkedln" element={<Linkedln />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
