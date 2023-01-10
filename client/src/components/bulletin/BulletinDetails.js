import React from "react";
import { useEffect, useState } from "react";
import { GetByIdWithComments } from "../../Managers/BulletinManager";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";

export const BulletinDetails = () => {
  const [bulletin, setBulletin] = useState();
  const { id } = useParams();

  useEffect(() => {
    GetByIdWithComments(id).then(setBulletin);
  }, []);

  if (!bulletin) {
    return null;
  }

  return (
    <>
      <div className="bulletin-details-card">
        <div className="bulletin-details">
          <h2>{bulletin.subject}</h2>
          <p>{bulletin.content}</p>
        </div>
        {/* <div className="bulletin-details-comment">
          <h3>Comments: </h3>
          <ListGroup>
            {bulletin.comments?.map((c) => (
              <ListGroupItem>{c.content}</ListGroupItem>
            ))}
          </ListGroup>
        </div> */}
      </div>
    </>
  );
};

export default BulletinDetails;
