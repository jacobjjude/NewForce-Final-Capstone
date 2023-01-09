import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { getCurrentUser } from "../../Managers/UserManager";

export const Bulletin = ({ bulletin }) => {
  const [user, setUser] = useState({});
  const localUser = getCurrentUser();

  const checkBulletinUserMatch = () => {
    if (localUser.id === bulletin?.user.id) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card className="m-4">
      <CardBody className="post">
        <Link to={`/bulletins/${bulletin.id}`}>
          <strong className="post-title">{bulletin.content}</strong>
        </Link>
        <div>
          posted by: {bulletin.user?.firstName} {bulletin.user?.lastName}
        </div>
        <div>
          {checkBulletinUserMatch() ? (
            <>
              <Link to={`/bulletins/edit/${bulletin.id}`}>
                <button>Edit</button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
