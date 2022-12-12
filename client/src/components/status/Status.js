import React from "react";
import {Card, CardBody} from "reactstrap";
import { Link } from "react-router-dom";

export const Status = ({status}) => {
    return (
        <Card>
            <CardBody>
                {status.content}
            </CardBody>
        </Card>
    )
}