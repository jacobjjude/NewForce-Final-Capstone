import React from "react";
import { useEffect, useState, useContext } from "react";
import { getAllStatuses } from "../../Managers/StatusManager";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody } from "reactstrap";
import { Status } from "./Status";

const StatusList = () => {
  const [statuses, setStatus] = useState([]);

  const getStatuses = () => {
    getAllStatuses().then((res) => setStatus(res));
  };

  useEffect(() => {
    getStatuses();
  });

  return (
    <>
      <p>
        {statuses.map((res) => (
          <Status key={res.Id} status={res} />
        ))}
      </p>
      <button>New Status</button>
    </>
  );
};

export default StatusList;
