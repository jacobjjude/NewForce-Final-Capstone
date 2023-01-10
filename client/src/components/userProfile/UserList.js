import React from "react";
import { useEffect, useState, useContext } from "react";
import { GetAllUsers } from "../../Managers/UserManager";
import { Link, useResolvedPath } from "react-router-dom";
import { User } from "./User";
import "../../App.css";
import { Card, CardBody, CardImg } from "reactstrap";
import { getAllFriends } from "../../Managers/FriendManager";
import { getCurrentUser } from "../../Managers/UserManager";
import { AddFriend } from "./UserAddDelete";
import { useNavigate } from "react-router-dom";
import { addNewFriend } from "../../Managers/FriendManager";
import { addFriend } from "./UserAddDelete";
import { removeFriend } from "./UserAddDelete";
import "../styles/user.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const user = getCurrentUser();
  const navigate = useNavigate();

  const getUsers = () => {
    GetAllUsers().then((res) => setUsers(res));
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getAllFriends().then((res) => setFriends(res));
  }, []);

  const checkIfFriends = (friend) => {
    if (
      friends.find(
        (x) =>
          (x.userProfileIdSender === user.id &&
            x.userProfileIdReceive === friend.id) ||
          (x.userProfileIdReceive === user.id &&
            x.userProfileIdSender === friend.id)
      )
    ) {
      return (
        <>
          <button onClick={() => removeFriend(user.id, friend.id, friends)}>
            Remove Friend
          </button>
        </>
      );
    } else if (user.id === friend.id) {
      return <></>;
    } else {
      return (
        <>
          <button onClick={() => addFriend(user.id, friend.id)}>
            Add Friend
          </button>
        </>
      );
    }
  };

  return (
    <>
      <h1>Find a new friend!</h1>
      <div className="friends-list">
        {users.map((res) => {
          return (
            <>
              <Card className="m-4 profileCard friends-card">
                <CardImg
                  className="avatar"
                  top
                  src={res.photoUrl}
                  alt="profile photo"
                />
                <CardBody className="name">
                  {res.firstName} {res.lastName}
                </CardBody>
                <div>{checkIfFriends(res)}</div>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
