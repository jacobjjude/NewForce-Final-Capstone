import React from "react";
import { useEffect, useState } from "react";
import BulletinList from "./bulletin/BulletinList";
import StatusList from "./status/StatusList";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./main/Main";
import { getCurrentUser } from "../Managers/UserManager";
import { Login } from "./Login";
import BulletinForm from "./bulletin/BulletinForm";
import StatusForm from "./status/StatusForm";
import { BulletinDetails } from "./bulletin/BulletinDetails";

const ApplicationViews = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localUser = getCurrentUser();
    if (!localUser) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="*" Navigate to="/login" />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bulletins/add" element={<BulletinForm />} />
      <Route path="/status/add" element={<StatusForm />} />
      <Route path="/bulletins/:id" element={<BulletinDetails />} />
    </Routes>
  );
};

export default ApplicationViews;
