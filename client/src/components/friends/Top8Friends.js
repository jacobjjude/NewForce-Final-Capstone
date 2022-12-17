import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import "../../App.css";

export const Top8Friend = ({ friend }) => {
  return (
    <Card className="friend">
      <h2>#{friend.rankingId}</h2>
      <CardImg className="thumbnailFriend" top src={friend.user?.photoUrl} />
      <CardBody className="friend-name">
        {friend.user?.firstName} {friend.user?.lastName}
      </CardBody>
    </Card>
  );
};
