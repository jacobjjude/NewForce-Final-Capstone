import React from "react";

export const getAllBulletins = () => {
  return fetch("https://localhost:5001/api/Bulletin").then((res) => res.json());
};
