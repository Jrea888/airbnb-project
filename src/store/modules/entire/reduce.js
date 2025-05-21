const initialState = {
    counter: 100
}

function reduce(state = initialState, action) {
    switch (action.type) {
        case 'entire/GET_ENTIRE':
            return action.payload;
        default:
            return state;
    }
}

export default reduce;