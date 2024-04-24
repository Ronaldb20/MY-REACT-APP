// AppContent.jsx

import React from 'react';
import MessageBox from './MessageBox'; // Import MessageBox component
import AddComment from './AddComment'; // Import AddComment component

function AppContent({ handleMessageChange, messages }) {
  return (
    <div>
      <h1>Biography of a Software Engineer</h1>
      <p>
        Name: Ronald Bohorquez<br />
        Introduction:<br /><br />
        I have no experience so I need some
        Feel Free to add feedback down below(all messages go to firebase So i will read them also website made in react)
      </p>
      {/* Map over messages and display each message */}
      {messages.map((message, index) => (
        <MessageBox key={index} message={message} />
      ))}
      {/* Component to add new message */}
      <AddComment onMessageChange={handleMessageChange} />
    </div>
  );
}

export default AppContent;
