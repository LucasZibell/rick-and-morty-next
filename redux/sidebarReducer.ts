import { createSlice } from "@reduxjs/toolkit";

export type FilterReducerState = {
  sidebar: {
    isSidebarOpen: boolean;
  };
};

export const counterSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = counterSlice.actions;

export default counterSlice.reducer;
