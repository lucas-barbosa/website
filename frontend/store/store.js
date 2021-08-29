import { configureStore } from "@reduxjs/toolkit";


// reducers
import projectsReducer from "./slices/projects";

const store = configureStore({
  reducer: {
    projectsReducer,
  },
});
export default store;
