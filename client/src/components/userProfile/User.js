import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { getCurrentUser } from "../../Managers/UserManager";
import "../../App.css";

export const User = () => {
  const user = getCurrentUser();

  return (
    <Card className="m-4 profileCard">
      <CardImg className="avatar" top src={user.photoUrl} alt="profile photo" />
      <CardBody className="name">
        Hi! {user.firstName} {user.lastName}
      </CardBody>
    </Card>
  );
};
