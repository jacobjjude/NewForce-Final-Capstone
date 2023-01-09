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

export const GetStatusById = (id) => {
  return fetch(`https://localhost:5001/api/Status/GetById/${id}`).then((res) =>
    res.json()
  );
};

export const editStatus = (status) => {
  return fetch(`https://localhost:5001/api/Status/${status.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(status),
  });
};
