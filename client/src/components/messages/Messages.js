import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../Managers/UserManager";
import { GetAllUsers } from "../../Managers/UserManager";
import "../styles/message.css";

export const Messages = ({ message }) => {
  const [users, setUsers] = useState([]);
  const [sender, setSender] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    findUser(message.userId);
  }, [users]);

  const getUsers = () => {
    GetAllUsers().then((res) => setUsers(res));
  };

  const findUser = (userId) => {
    let result = users.find((x) => x.id === userId);
    setSender(result);
  };

  return (
    <Card className="m-4">
      <CardBody>
        <div>
          Message from {sender?.firstName} {sender?.lastName}
        </div>
        <div>Subject: {message.subject}</div>
        <Link to={`/messages/${message.id}`}>Read Message</Link>
      </CardBody>
    </Card>
  );
};
