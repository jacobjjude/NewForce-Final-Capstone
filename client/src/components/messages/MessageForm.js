import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleMessageById } from "../../Managers/MessagesManager";
import { Form, FormGroup, Label, Input, Button, CardLink } from "reactstrap";
import { addMessage } from "../../Managers/MessagesManager";
import { GetAllUsers } from "../../Managers/UserManager";
import { getCurrentUser } from "../../Managers/UserManager";
import "../styles/message.css";

export const MessageForm = () => {
  const [users, setUsers] = useState([]);
  const [newMessage, setNewMessage] = useState({
    userId: 0,
    friendId: 0,
    subject: "",
    content: "",
  });
  const currentUser = getCurrentUser();

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    GetAllUsers().then((res) => setUsers(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    const messageToSendToAPI = {
      userId: currentUser.id,
      friendId: newMessage.friendId,
      subject: newMessage.subject,
      content: newMessage.content,
    };
    return addMessage(messageToSendToAPI).then((p) => {
      navigate("/Messages");
    });
  };

  const handleChange = (e) => {
    const copy = { ...newMessage };
    copy[e.target.id] = e.target.value;
    setNewMessage(copy);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="friendId">To:</Label>
          <Input
            type="select"
            name="friendId"
            id="friendId"
            onChange={handleChange}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
            value={newMessage.subject}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Message:</Label>
          <Input
            type="textarea"
            name="content"
            id="content"
            onChange={handleChange}
            value={newMessage.content}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
};
