import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  useData: null,
};
const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.useData = action.payload;
    },
    logout: (state, action) => {
      state.status = false;
      state.useData = null;
    },
  },
});
export const { login, logout } = authslice.actions;

export default authslice.reducer;
