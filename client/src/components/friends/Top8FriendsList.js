import React from "react";
import { useEffect, useState, useContext } from "react";
import { getTop8Friends } from "../../Managers/FriendManager";
import { Link } from "react-router-dom";
import { Top8Friend } from "./Top8Friends";
import { getCurrentUser } from "../../Managers/UserManager";
import { Card, CardBody } from "reactstrap";

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
      <p>
        {
            friendList.map((res) => (
                <Top8Friend key={res.id} friend={res}/>
            ))
        }
      </p>
    </>
  );
};

export default Top8FriendsList;
