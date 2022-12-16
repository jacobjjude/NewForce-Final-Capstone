import { useEffect, useState } from "react";
import { addStatus } from "../../Managers/StatusManager";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../Managers/UserManager";

export const StatusForm = () => {
  const [newStatus, setNewStatus] = useState({
    userProfileId: null,
    content: "",
  });
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleNewSaveStatus = (e) => {
    e.preventDefault();
    const statusToSendToAPI = {
      userProfileId: user.id,
      content: newStatus.content,
    };
    return addStatus(statusToSendToAPI).then((p) => {
      navigate("/");
    });
  };

  const saveNewStatus = (evt) => {
    const copy = { ...newStatus };
    copy[evt.target.id] = evt.target.value;
    setNewStatus(copy);
  };
  return (
    <>
      <h2>New Status</h2>
      <form className="row g-3" onSubmit={handleNewSaveStatus}>
        <div>
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            onChange={saveNewStatus}
            className="form-control"
            id="content"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default StatusForm;
