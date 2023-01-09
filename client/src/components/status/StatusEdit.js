import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, CardLink } from "reactstrap";
import { GetStatusById } from "../../Managers/StatusManager";
import { editStatus } from "../../Managers/StatusManager";

export const StatusEdit = () => {
  const { id } = useParams();
  const [statusToEdit, setStatusToEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    GetStatusById(id).then((res) => {
      setStatusToEdit(res);
    });
  }, []);

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedStatus = {
      content: statusToEdit.content,
      id: statusToEdit.id,
    };
    editStatus(updatedStatus).then(() => {
      navigate("/");
    });
  };

  const saveEditStatus = (e) => {
    const copy = { ...statusToEdit };
    copy[e.target.id] = e.target.value;
    setStatusToEdit(copy);
  };
  return (
    <>
      <h3>Edit your status!</h3>
      <div onSubmit={handleSaveEdit}>
        <Form>
          <FormGroup>
            <Label for="content">Content: </Label>
            <Input
              type="text"
              value={statusToEdit.content}
              onChange={saveEditStatus}
              id="content"
            />
          </FormGroup>
          <Button type="submit" className="button mr-2">
            Save
          </Button>
        </Form>
      </div>
    </>
  );
};

export default StatusEdit;
