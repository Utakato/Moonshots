import { combineReducers } from "redux"
import projectsReducer from "../features/projects/projectsSlice"

const rootReducer = combineReducers({
    projects: projectsReducer,
})

export default rootReducer