import { useEffect, useState } from "react";
import { addBulletin } from "../../Managers/BulletinManager";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../Managers/UserManager";

export const BulletinForm = () => {
  const [newBulletin, setNewBulletin] = useState({
    userProfileId: null,
    subject: "",
    content: "",
  });
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleNewSavePost = (e) => {
    e.preventDefault();
    const bulletinToSendToAPI = {
      userProfileId: user.id,
      subject: newBulletin.subject,
      content: newBulletin.content,
    };
    return addBulletin(bulletinToSendToAPI).then((p) => {
      navigate("/");
    });
  };

  const saveNewPost = (evt) => {
    const copy = { ...newBulletin };
    copy[evt.target.id] = evt.target.value;
    setNewBulletin(copy);
  };

  return (
    <>
      <h2>Add New Bulletin</h2>
      <form className="row g-3" onSubmit={handleNewSavePost}>
        <div className="col-md-6">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            onChange={saveNewPost}
            className="form-control"
            id="subject"
          />
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            onChange={saveNewPost}
            className="form-control"
            id="content"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};

export default BulletinForm;
