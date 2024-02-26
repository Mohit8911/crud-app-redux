import { createSlice, nanoid } from "@reduxjs/toolkit";
import { storeData } from "../../utils/asyncFunctions";

const initialState = {
  users: [],
};

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    storeUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      storeData(state.users);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      storeData(state.users);
    },
    updateUser: (state, action) => {
      const i = state.users.findIndex((user) => user.id === action.payload.id);
      state.users[i] = action.payload;
      storeData(state.users);
    },
  },
});

export const { addUser, removeUser, updateUser, storeUsers } =
  userReducer.actions;
export default userReducer.reducer;
