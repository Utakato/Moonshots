import { combineReducers } from "redux"
import projectsReducer from "../features/projects/projectsSlice"
import queryReducer from "../features/query/querySlice"

const rootReducer = combineReducers({
    projects: projectsReducer,
    query: queryReducer
})

export default rootReducer