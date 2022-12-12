import React from "react";
import { useEffect, useState } from "react";
import BulletinList from "./bulletin/BulletinList";
import StatusList from "./status/StatusList";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./main/Main";

const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default ApplicationViews;
