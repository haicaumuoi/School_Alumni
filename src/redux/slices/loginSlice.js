// In your "slices/loginSlice.js" file (create the file if it doesn't exist)
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false }, // Set the initial state
  reducers: {
    login: (state) => {
      state.isLoggedIn = true; // Update the state when user logs in
    },
    logout: (state) => {
      state.isLoggedIn = false; // Update the state when user logs out
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
