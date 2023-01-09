import React from "react";
import { useEffect, useState, useContext } from "react";
import { GetAllUsers } from "../../Managers/UserManager";
import { Link, useResolvedPath } from "react-router-dom";
import { User } from "./User";
import "../../App.css";
import { Card, CardBody, CardImg } from "reactstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    GetAllUsers().then((res) => setUsers(res));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Find a new friend!</h1>
      <div>
        {users.map((res) => {
          return (
            <>
              <Card className="m-4 profileCard">
                <CardImg
                  className="avatar"
                  top
                  src={res.photoUrl}
                  alt="profile photo"
                />
                <CardBody className="name">
                  Hi! {res.firstName} {res.lastName}
                </CardBody>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
