import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Bulletin = ({ bulletin }) => {
  return (
    <Card className="m-4">
      <CardBody>
        <Link to={`/bulletins/${bulletin.id}`}>
          <strong>{bulletin.subject}</strong>
        </Link>
      </CardBody>
    </Card>
  );
};
