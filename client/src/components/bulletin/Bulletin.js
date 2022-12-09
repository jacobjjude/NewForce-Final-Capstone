import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Bulletin = ({ post }) => {
  return (
    <Card className="m-4">
      <CardBody>
        {post.subject}
        {post.content}
      </CardBody>
    </Card>
  );
};
