import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BulletinList from "../bulletin/BulletinList";
import Top8FriendsList from "../friends/Top8FriendsList";
import StatusList from "../status/StatusList";
import { User } from "../userProfile/User";

const Main = () => {
  return (
    <>
      <div className="main">
        <BulletinList />
      </div>
      <div className="main">
        <StatusList />
      </div>
      <div className="main">
        <User />
      </div>
      <div className="main">
        <Top8FriendsList />
      </div>
    </>
  );
};

export default Main;
