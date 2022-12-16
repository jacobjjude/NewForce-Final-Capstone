import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { getCurrentUser } from "../../Managers/UserManager";

export const User = () => {
  const user = getCurrentUser();

  return (
    <Card className="m-4">
      <CardImg top src={user.photoUrl} alt="profile photo" />
      <CardBody>
        Hi! {user.firstName} {user.lastName}
      </CardBody>
    </Card>
  );
};
