import React, { useState } from 'react';

function AddComment({ onMessageChange }) {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the callback function passed from the parent component to add the message
    onMessageChange(inputValue);
    // Clear the input field
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddComment;
