import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, CardLink } from "reactstrap";
import { GetById } from "../../Managers/BulletinManager";
import { editBulletin } from "../../Managers/BulletinManager";

export const BulletinEdit = () => {
  const { id } = useParams();
  const [bulletinToEdit, setBulletinToEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    GetById(id).then((res) => {
      setBulletinToEdit(res);
    });
  }, []);

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedBulletin = {
      subject: bulletinToEdit.subject,
      content: bulletinToEdit.content,
      id: bulletinToEdit.id,
    };
    editBulletin(updatedBulletin).then(() => {
      navigate("/");
    });
  };

  const saveEditBulletin = (e) => {
    const copy = { ...bulletinToEdit };
    copy[e.target.id] = e.target.value;
    setBulletinToEdit(copy);
  };
  return (
    <>
      <section>
        <h3>Edit your bulletin!</h3>
        <div onSubmit={handleSaveEdit} className="border mt-3 p-3">
          <Form>
            <FormGroup>
              <Label for="subject">Subject: </Label>
              <Input
                type="text"
                value={bulletinToEdit.subject}
                onChange={saveEditBulletin}
                id="subject"
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">Content: </Label>
              <Input
                type="textarea"
                value={bulletinToEdit.content}
                onChange={saveEditBulletin}
                id="content"
              />
            </FormGroup>
            <Button type="submit" className="button mr-2">
              Save
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default BulletinEdit;
