import React from "react";
import { useEffect, useState, useContext } from "react";
import { getTop8Friends } from "../../Managers/FriendManager";
import { Link } from "react-router-dom";
import { Top8Friend } from "./Top8Friends";
import { getCurrentUser } from "../../Managers/UserManager";
import { Card, CardBody } from "reactstrap";
import "../../App.css";

export const Top8FriendsList = () => {
  const [friendList, setFriendList] = useState([]);
  const currentUser = getCurrentUser();

  const getFriends = () => {
    getTop8Friends(currentUser.id).then((res) => setFriendList(res));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <div className="friend-header">
        <h2 className="friends-title">Top 8 Friends</h2>
      </div>
      <div className="friends">
        {friendList.map((res) => (
          <Top8Friend key={res.id} friend={res} />
        ))}
      </div>
    </>
  );
};

export default Top8FriendsList;
