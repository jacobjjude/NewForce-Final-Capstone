import React from "react";
import { useEffect, useState, useContext } from "react";
import { getAllBulletins } from "../../Managers/BulletinManager";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody } from "reactstrap";
import { Bulletin } from "./Bulletin";

const BulletinList = () => {
  const [bulletins, setBulletin] = useState([]);

  const getBulletins = () => {
    getAllBulletins().then((res) => setBulletin(res));
  };

  useEffect(() => {
    getBulletins();
  }, []);

  return (
    <>
      {bulletins.map((single) => {
        return <h1>works</h1>;
      })}
    </>
  );
};

export default BulletinList;
