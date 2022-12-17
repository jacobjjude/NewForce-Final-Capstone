import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../../App.css";

export const Bulletin = ({ bulletin }) => {
  return (
    <Card className="m-4">
      <CardBody className="post">
        <Link to={`/bulletins/${bulletin.id}`}>
          <strong className="post-title">{bulletin.subject}</strong>
        </Link>
      </CardBody>
    </Card>
  );
};
