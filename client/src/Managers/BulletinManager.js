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

export const GetByIdWithComments = (id) => {
  return fetch(
    `https://localhost:5001/api/Bulletin/GetByIdWithComments/${id}`
  ).then((res) => res.json());
};

export const GetById = (id) => {
  return fetch(`https://localhost:5001/api/Bulletin/GetById/${id}`).then(
    (res) => res.json()
  );
};

export const editBulletin = (bulletin) => {
  return fetch(`https://localhost:5001/api/Bulletin/${bulletin.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bulletin),
  });
};
