import { addUser, removeUser, updateUser, storeUsers } from "../reducers/userReducer";
import { store } from "../store";

const dispatch = store.dispatch;

export default {
  storeUsers: (users) => dispatch(storeUsers(users)),
  addUser: (user) => dispatch(addUser(user)),
  removeUser: (id) => dispatch(removeUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
};
