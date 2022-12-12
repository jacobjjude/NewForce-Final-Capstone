import React from "react";

export const getAllStatuses = () => {
  return fetch("https://localhost:5001/api/Status").then((res) => res.json());
};
