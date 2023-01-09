import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../Managers/UserManager";

export const Status = ({ status }) => {
  const [user, setUser] = useState({});
  const localUser = getCurrentUser();

  console.log(status.userProfileId);

  const checkStatusUserMatch = () => {
    if (localUser.id === status.userProfileId) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card className="status">
      <CardBody>
        <CardTitle className="status-title">
          {status.firstName} {status.lastName}
        </CardTitle>
        <CardText className="status-text">{status.content}</CardText>
      </CardBody>
      <div>
          {checkStatusUserMatch() ? (
            <>
              <Link to={`/status/edit/${status.id}`}>
                <button>Edit</button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
    </Card>
  );
};
