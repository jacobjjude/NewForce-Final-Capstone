import React from "react";

const baseUrl = `/api/post`;

export const getAllBulletins = () => {
  return fetch(baseUrl)
  .then((res) => res.json());
};
