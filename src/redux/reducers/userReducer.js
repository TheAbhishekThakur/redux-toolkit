import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    age: "",
    mobNo: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.mobNo = action.payload.mobNo;
    },
    resetUser: (state) => {
      state.name = "";
      state.age = "";
      state.mobNo = "";
    },
  },
});

export const { addUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
