import {configureStore} from "@reduxjs/toolkit";

// reducers
import projectsReducer from "./slices/projects";

export default store =  configureStore({
    reducer:{
        projectsReducer
    }
});