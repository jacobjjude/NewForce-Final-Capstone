import React from "react";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../Managers/UserManager";
import { getAllMessagesById } from "../../Managers/MessagesManager";
import { Messages } from "./Messages";
import { Link } from "react-router-dom";
import "../styles/message.css";

export const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const user = getCurrentUser();

  const getMessages = () => {
    getAllMessagesById(user.id).then((res) => setMessages(res));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <h1>Messages:</h1>
      <div>
        {messages.map((res) => (
          <Messages key={res.id} message={res} />
        ))}
      </div>
      <Link to="/messages/new">Send a Message</Link>
    </>
  );
};
