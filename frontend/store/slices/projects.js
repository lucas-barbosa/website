import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addAllProjects(state, action) {
      return (state = action.payload);
    },
  },
});

export default projectsSlice.reducer;
export const { addAllProjects } = projectsSlice.actions;
