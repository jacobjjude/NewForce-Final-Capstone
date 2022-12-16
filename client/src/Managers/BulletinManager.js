import React from "react";

export const getAllBulletins = () => {
  return fetch("https://localhost:5001/api/Bulletin").then((res) => res.json());
};

export const addBulletin = (singleBulletin) => {

  return fetch("https://localhost:5001/api/Bulletin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleBulletin),
  });
};
