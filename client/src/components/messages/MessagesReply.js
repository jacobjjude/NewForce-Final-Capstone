import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleMessageById } from "../../Managers/MessagesManager";
import { Form, FormGroup, Label, Input, Button, CardLink } from "reactstrap";
import { addMessage } from "../../Managers/MessagesManager";

export const MessageReply = () => {
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState({
    userId: 0,
    friendId: 0,
    Subject: "",
    content: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleMessageById(id).then((res) => setMessage(res));
  }, [id]);

  useEffect(() => {
    setNewMessage(message);
  }, [message]);

  const handleNewSaveMessage = (e) => {
    e.preventDefault();
    const messageToSendToAPI = {
      userId: newMessage.userId,
      friendId: newMessage.friendId,
      Subject: newMessage.Subject,
      content: newMessage.content,
    };
    return addMessage(messageToSendToAPI).then((p) => {
      navigate("/Messages");
    });
  };

  const saveNewMessage = (e) => {
    const copy = { ...newMessage };
    copy[e.target.id] = e.target.value;
    setNewMessage(copy);
  };

  return (
    <>
      <h2>Send your reply to</h2>
      <form className="row g-3" onSubmit={handleNewSaveMessage}>
        <div>
          <label htmlFor="subject">Subject: </label>
          <input
            type="text"
            value={`Re: ${message?.subject}`}
            className="form-control"
            onChange={saveNewMessage}
            id="subject"
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <Input
            type="textarea"
            value={`${message?.content}`}
            id="content"
            onChange={saveNewMessage}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </>
  );
};
