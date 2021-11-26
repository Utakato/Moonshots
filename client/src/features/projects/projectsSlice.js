const projectsReducer = (state = [], action) => {
    switch(action.type){
        case "projects/fetchAllProjects": {
            return action.payload.results
        }
        default: return state
    }
}

export default projectsReducer