export const getCurrentUser = () => {
  const currentUser = localStorage.getItem("yourPlaceUser");

  return JSON.parse(currentUser);
};

export const login = (userObject) => {
  return fetch(`/api/User/GetByEmail?email=${userObject.email}`)
    .then((res) => res.json())
    .then((userObjFromDB) => {
      localStorage.setItem("yourPlaceUser", JSON.stringify(userObjFromDB));
    });
};

export const logout = () => {
  localStorage.clear();
};

export const GetAllUsers = () => {
  return fetch(`https://localhost:5001/api/User`).then((res) => res.json());
};

export const isFriendsWithUser = (userId) => {
  
}