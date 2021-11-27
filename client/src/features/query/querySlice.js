const defaultState = "watchlist=-1"
const queryReducer = (state=defaultState, action) => {
    switch(action.type){
        case "query/updateQuery": {
            if (action.payload == state){
                let newAction = action.payload.slice(0,-2) + "1"
                return newAction
            } else {
                return action.payload
            }
        }
        default: return state
    }
}

export default queryReducer