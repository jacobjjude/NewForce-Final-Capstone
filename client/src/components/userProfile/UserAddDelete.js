import { addNewFriend } from "../../Managers/FriendManager";
import { useNavigate } from "react-router-dom";
import { removeFriendAPI } from "../../Managers/FriendManager";

export const addFriend = async (userId, friendId) => {
  const friendToAdd = {
    userProfileIdSender: userId,
    userProfileIdReceive: friendId,
  };
  await addNewFriend(friendToAdd);
  window.alert("Friend added!");
  window.location.reload();
};

export const removeFriend = async (userId, friendId, friendsObj) => {
  let result = friendsObj.find(
    (x) =>
      (x.userProfileIdSender === userId &&
        x.userProfileIdReceive === friendId) ||
      (x.userProfileIdReceive === userId && x.userProfileIdSender === friendId)
  );
  await removeFriendAPI(result.id);
  window.alert("Friend removed!");
  window.location.reload();
};
