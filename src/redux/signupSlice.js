import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",

  initialState: {
    users: []
  },

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

// actions
export const { addUser } = signupSlice.actions;

// reducer
export default signupSlice.reducer;