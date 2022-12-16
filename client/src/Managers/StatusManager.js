import React from "react";

export const getAllStatuses = () => {
  return fetch("https://localhost:5001/api/Status").then((res) => res.json());
};

export const addStatus = (singleStatus) => {
  return fetch("https://localhost:5001/api/Status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleStatus),
  });
};
