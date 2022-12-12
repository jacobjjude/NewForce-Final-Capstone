import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BulletinList from "../bulletin/BulletinList";
import StatusList from "../status/StatusList";

const Main = () => {
  return (
    <>
      <div>
        <BulletinList />
      </div>
      <div>
        <StatusList />
      </div>
    </>
  );
};

export default Main;
