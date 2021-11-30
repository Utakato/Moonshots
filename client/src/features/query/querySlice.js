const defaultState = {
    order: "watchlist=-1",
    offset : 0
}

const queryReducer = (state=defaultState, action) => {
    switch(action.type){

        case "query/updateQueryOrder": {
            if (action.payload === state.order){
                let order = action.payload.slice(0,-2) + "1" // Sets sort order to asc if it's already desc.
                return {...state, order : order}
            } else {
                return {...state, order: action.payload}
            }
        }

        case "query/updateQueryOffset": {
            return {...state, offset: action.payload}
        }

        default: return state
    }
}

export default queryReducer