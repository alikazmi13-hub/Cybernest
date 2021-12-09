import { createSlice } from "@reduxjs/toolkit";

// exporting name of Slice is userSlice
export const userSlice = createSlice({
  // first part is going to be name
  name: "user",
  initialState: {
    user: null,
  },
  //   we are using reducer it will act as a function it will update our state and redux state
  reducers: {
    //   we are taking state here to update state &  action is using to passed data to us
    login: (state, action) => {
      state.user = action.payload;
      //
    },
    // it will not logout state that`s why we use null
    logout: (state) => {
      state.user = null;
    },
  },
});

// calling function /actions
export const { login, logout } = userSlice.actions;

// here we are going to export state const
export const selectUser = (state) => state.user.user;

// export userSlice itself
export default userSlice.reducer;
