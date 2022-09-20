import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebarReducer";

export default configureStore({
  reducer: {
    sidebar: sideBarReducer,
  },
});
