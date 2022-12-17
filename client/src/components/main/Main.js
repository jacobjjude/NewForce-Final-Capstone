import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BulletinList from "../bulletin/BulletinList";
import Top8FriendsList from "../friends/Top8FriendsList";
import StatusList from "../status/StatusList";
import { User } from "../userProfile/User";
import "../../App.css";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <User />
        </div>
        <div className="middle">
          <div className="bulletins">
            <BulletinList />
          </div>
          <div className="statuses">
            <StatusList />
          </div>
        </div>
        <div className="right">
          <Top8FriendsList />
        </div>
      </div>
    </>
  );
};

export default Main;
