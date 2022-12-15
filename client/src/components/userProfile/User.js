import React from "react";
import { Card, CardBody } from "reactstrap";
import { getCurrentUser } from "../../Managers/UserManager";

export const User = () => {
  const user = getCurrentUser();

  return (
    <Card>
        <CardBody>{user.photoUrl}</CardBody>
        <CardBody>Hi! {user.firstName} {user.lastName}</CardBody>
    </Card>
  )
};
