import React from "react";
import { useParams } from "react-router-dom";
import { getSingleMessageById } from "../../Managers/MessagesManager";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MessageDetails = () => {
  const [message, setMessage] = useState();
  const { id } = useParams();

  useEffect(() => {
    getSingleMessageById(id).then((res) => setMessage(res));
  }, [id]);

  return (
    <>
      <h1>Subject: {message?.subject}</h1>
      <h3>Content: {message?.content}</h3>
      {/* <Link to={`/reply/${id}`}>
        <button>Reply</button>
      </Link> */}
    </>
  );
};
