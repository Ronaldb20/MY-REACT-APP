// firebaseUtils.jsx

import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase"; // Assuming you have already initialized Firebase

// Reference to the "messages" collection in Firestore
const messagesCollection = collection(firestore, 'messages');

// Function to add a new message to the database
const addMessage = async (messageData) => {
  await addDoc(messagesCollection, messageData);
};

// Function to add a new message to the database (wrapper function)
const addMessageToDatabase = async (messageData) => {
  await addMessage(messageData); // Call the existing addMessage function internally
};

export { addMessageToDatabase };
