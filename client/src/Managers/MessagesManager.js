import React from "react";

export const getAllMessagesById = (id) => {
  return fetch(`https://localhost:5001/api/Messages/GetById/${id}`).then(
    (res) => res.json()
  );
};

export const getSingleMessageById = (id) => {
  return fetch(`https://localhost:5001/api/Messages/GetSingleById/${id}
  `).then((res) => res.json());
};

export const addMessage = (message) => {
  return fetch("https://localhost:5001/api/Messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
