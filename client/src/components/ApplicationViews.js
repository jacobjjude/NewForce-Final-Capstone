import React from "react";
import { useEffect, useState } from "react";
import BulletinList from "./bulletin/BulletinList";
import StatusList from "./status/StatusList";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./main/Main";
import { getCurrentUser } from "../Managers/UserManager";
import { Login } from "./Login";

const ApplicationViews = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localUser = getCurrentUser();
    if (!localUser) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return !isLoggedIn ? (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="*" Navigate to="/login" />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default ApplicationViews;
