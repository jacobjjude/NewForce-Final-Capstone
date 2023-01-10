export const getTop8Friends = (id) => {
  return fetch(`https://localhost:5001/api/Top8Friend?id=${id}
    `).then((res) => res.json());
};

export const getAllFriends = () => {
  return fetch(`https://localhost:5001/api/Top8Friend/GetAll`).then((res) =>
    res.json()
  );
};

export const addNewFriend = (friend) => {
  return fetch("https://localhost:5001/api/Top8Friend/newFriend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(friend),
  });
};

export const removeFriendAPI = (id) => {
  return fetch(`https://localhost:5001/api/Top8Friend/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .catch((error) => {
      alert(error);
    });
};
