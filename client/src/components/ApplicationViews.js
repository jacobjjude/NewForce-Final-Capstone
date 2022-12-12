import React from "react";
import { useEffect, useState } from "react";
import BulletinList from "./bulletin/BulletinList";
import { Routes, Route, Navigate } from "react-router-dom";

const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<BulletinList />} />
    </Routes>
  );
};

export default ApplicationViews;
