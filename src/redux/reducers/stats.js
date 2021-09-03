const defaultState = {
    stats: []
}


const statsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_STATS":
            return {
                ...state,
                stats: action.stats
            }
        default:
            return state
    }
}

export default statsReducer